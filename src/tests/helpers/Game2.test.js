import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import { waitFor } from '@testing-library/react';
import App from '../../App';

it('Tendo um token inválido, volta para a pagina de login', async () => {
  const { history } = renderWithRouterAndRedux(<App />, {}, '/game');
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(invalidTokenQuestionsResponse),
    })
  );
  await waitFor(() => expect(history.location.pathname).toBe('/'));
});
