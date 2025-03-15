import { Route, createRoutesFromElements } from 'react-router';
import { PrimaryLayout } from '../layout/primary/PrimaryLayout';
import { SecondaryLayout } from '../layout/secondary/SecondaryLayout.jsx';
import { AgePage } from '../pages/age/age.page';
import { BooksPage } from '../pages/books/books.page.jsx';
import { EmailPage } from '../pages/email/email.page.jsx';
import { FinishPage } from '../pages/finish/finish.page.jsx';
import { GenderPage } from '../pages/gender/gender.page';
import { HomePage } from '../pages/home/home.page';
import { ProgressPage } from '../pages/progress/progress.page.jsx';
import { TopicsPage } from '../pages/topics/topics.page.jsx';
import { ROUTES } from './router.constants.js';

export const routes = createRoutesFromElements(
  <Route>
    <Route element={<PrimaryLayout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.Gender} element={<GenderPage />} />
      <Route path={ROUTES.Age} element={<AgePage />} />
      <Route path={ROUTES.Books} element={<BooksPage />} />
      <Route path={ROUTES.Topics} element={<TopicsPage />} />
    </Route>

    <Route element={<SecondaryLayout />}>
      <Route path={ROUTES.Progress} element={<ProgressPage />} />
      <Route path={ROUTES.Email} element={<EmailPage />} />
      <Route path={ROUTES.Finish} element={<FinishPage />} />
    </Route>
  </Route>,
  [0, 1],
);
