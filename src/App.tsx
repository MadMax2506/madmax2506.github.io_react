import { QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider, useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { CookiesProvider } from 'react-cookie';
import { Helmet } from 'react-helmet';
import { Routes } from 'routes/Routes';
import { queryClient } from 'utils';

export const App = () => {
  // Activate dayjs plugins
  dayjs.extend(RelativeTime);

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <LanguageProvider>
          <ThemeProvider>
            <MetaData />
            <Routes />
          </ThemeProvider>
        </LanguageProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export const MetaData = () => {
  const { language, translate } = useLanguageContext();

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{translate('meta.title')}</title>
      <meta name="description" content={translate('meta.description')} />
    </Helmet>
  );
};
