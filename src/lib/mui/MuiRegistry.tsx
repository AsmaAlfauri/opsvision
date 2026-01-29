'use client';
// solve hydration from MUI 
//يخلي الـ CSS اللي يولّده MUI على السيرفر
// نفسه حرفيًا اللي راح يولّده على الكلاينت

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useServerInsertedHTML } from 'next/navigation';
import { theme } from './theme';

export default function MuiRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    const [{ cache, flush }] = React.useState(() => {
        // يعمل Emotion Cache
        const cache = createCache({ key: 'mui', prepend: true });
        cache.compat = true;
        // يجمع كل الـ styles اللي انعملت
        const prevInsert = cache.insert;
        let inserted: string[] = [];

    cache.insert = (...args) => {
      const serialized = args[1];
      if (!cache.inserted[serialized.name]) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  });
//“دخّل هالـ CSS جوّا الـ HTML قبل ما ينبعت”
  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;

    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }

    return (
      <style
        key="mui-styles"
        data-emotion={`mui ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
