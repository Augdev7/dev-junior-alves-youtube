import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import useSWR from 'swr';

import { fetcher } from '@/lib/utils';

import { DomainProps } from '@/lib/types';

export default function useDomains({ domain }: { domain?: string } = {}) {
  const { slug } = useParams() as {
    slug: string;
  };

  const { data, error } = useSWR<DomainProps[]>(
    slug && `/api/projects/${slug}/domains`,
    fetcher,
    {
      dedupingInterval: 60000
    }
  );

  const domains = useMemo(() => {
    return slug
      ? data
      : ([
          {
            slug: 'dub.sh',
            verified: true,
            primary: true,
            target: 'https://dub.sh',
            type: 'redirect'
          }
        ] as DomainProps[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    domains,
    primaryDomain: domains?.find((domain) => domain.primary)?.slug,
    verified: domain
      ? // If a domain is passed, check if it's verified
        domains?.find((d) => d.slug === domain)?.verified
      : // If no domain is passed, check if any of the domains are verified
        domains?.some((d) => d.verified),
    loading: !domains && !error,
    error
  };
}
