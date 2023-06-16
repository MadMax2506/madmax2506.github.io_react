import { SectionContainer } from 'components/Container/SectionContainer';
import { Grid, Typography, useTheme } from '@mui/material';
import { PersonalAvatar } from 'pages/Portfolio/AboutMe/PersonalAvatar';
import { FrameworkList } from 'pages/Portfolio/AboutMe/FrameworkList';
import { T } from 'components/T/T';

export const AboutMe = (): JSX.Element => {
  const { breakpoints } = useTheme();

  return (
    <SectionContainer titleTextKey={'pages.about-me'}>
      <Grid
        container
        rowSpacing={{ xs: 6, md: 0 }}
        columnSpacing={{ xs: 0, md: 4 }}
        alignItems="flex-start"
        justifyContent="center"
        sx={{
          textAlign: 'center',
          [breakpoints.up('md')]: { textAlign: 'left' },
        }}
      >
        <Grid item xs={12} md={8} xl={9} order={{ xs: 2, md: 1 }}>
          <Typography sx={{ pb: 3 }}>
            <T textKey={'about-me'} />
          </Typography>

          <FrameworkList />
        </Grid>

        <Grid item xs={12} md={4} xl={3} order={{ xs: 1, md: 2 }}>
          <PersonalAvatar />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
