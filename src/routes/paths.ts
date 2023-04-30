import { path, Path } from 'static-path';

export type Paths = Path<'/'> | Path<'/imprint'> | Path<'/privacy-policy'>;

export const paths = {
  root: path('/'),
  imprint: path('/imprint'),
  privacyPolicy: path('/privacy-policy'),
};
