/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from 'next';
import { NextRouter } from 'next/router';

import { get } from '@vercel/edge-config';
import ms from 'ms';
import { customAlphabet } from 'nanoid';

export function constructMetadata({
  title = 'Dub - Link Management for Modern Marketing Teams',
  description = 'Dub is an open-source link management tool for modern marketing teams to create, share, and track short links.',
  image = 'https://dub.sh/_static/thumbnail.png'
}: {
  title?: string;
  description?: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@dubdotsh'
    },
    icons: '/favicon.ico',
    metadataBase: new URL('https://dub.sh'),
    themeColor: '#FFF'
  };
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
); // 7-character random string

interface SWRError extends Error {
  status: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const error = await res.text();
    const err = new Error(error) as SWRError;
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export function nFormatter(num?: number, digits?: number) {
  if (!num) return '0';
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, '$1') + item.symbol
    : '0';
}

export function capitalize(str: string) {
  if (!str || typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const chunk = <T>(array: T[], chunk_size: number): T[][] => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunk_size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as T[][]);
};

export function linkConstructor({
  key,
  domain = 'dub.sh',
  localhost,
  pretty,
  noDomain
}: {
  key: string;
  domain?: string;
  localhost?: boolean;
  pretty?: boolean;
  noDomain?: boolean;
}) {
  const link = `${localhost ? 'http://localhost:3000' : `https://${domain}`}${
    key !== '_root' ? `/${key}` : ''
  }`;

  if (noDomain) return `/${key}`;
  return pretty ? link.replace(/^https?:\/\//, '') : link;
}

export const timeAgo = (timestamp?: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never';
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`;
};

export const getDateTimeLocal = (timestamp?: Date): string => {
  const d = timestamp ? new Date(timestamp) : new Date();
  if (d.toString() === 'Invalid Date') return '';
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .split(':')
    .slice(0, 2)
    .join(':');
};

export const formatDate = (dateString: string) => {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  });
};

export const getFirstAndLastDay = (day: number) => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  if (currentDay >= day) {
    // if the current day is greater than target day, it means that we just passed it
    return {
      firstDay: new Date(currentYear, currentMonth, day),
      lastDay: new Date(currentYear, currentMonth + 1, day - 1)
    };
  } else {
    // if the current day is less than target day, it means that we haven't passed it yet
    const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear; // if the current month is January, we need to go back a year
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1; // if the current month is January, we need to go back to December
    return {
      firstDay: new Date(lastYear, lastMonth, day),
      lastDay: new Date(currentYear, currentMonth, day - 1)
    };
  }
};
