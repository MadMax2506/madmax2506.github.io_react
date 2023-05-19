import { Box, Drawer, IconButton, Stack } from '@mui/material';
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Divider } from 'components/Divider';
import { PageTitle } from 'components/navigation/PageTitle';
import { NavigationPage } from 'components/navigation/types';
import { SidebarLinks } from 'components/navigation/MobileNavigation/SidebarLinks';
import { LanguageSelect } from 'components/navigation/LanguageSelect/LanguageSelect';
import { ThemeModeToggle } from 'components/navigation/ThemeModeToggle';

type MobileNavigationProps = {
  pages: NavigationPage[];
};

export const MobileNavigation = (props: MobileNavigationProps): JSX.Element => {
  const { pages } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <PageTitle variant="h5" flexShrink={0} withLink />

      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row-reverse' }}>
        <IconButton size="large" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: '100%', alignItems: 'center' } }}
      >
        <Stack spacing={2} alignItems="center" pt={2}>
          <PageTitle variant="h5" withLink />

          <IconButton size="large" sx={{ position: 'absolute', right: 20, top: -8 }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>

          <Divider width={'100%'} borderRadius={0} />

          <SidebarLinks pages={pages} setOpen={setOpen} />

          <LanguageSelect />

          <ThemeModeToggle />

          <Divider width={'100%'} borderRadius={0} />
        </Stack>
      </Drawer>
    </>
  );
};
