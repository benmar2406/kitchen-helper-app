import { Outlet } from 'react-router-dom';
import { RecipesProvider } from './context/RecipesContext';

function SharedLayout() {
  return (
    <RecipesProvider>
      <Outlet /> {/* All nested routes will share this context */}
    </RecipesProvider>
  );
}

export default SharedLayout;