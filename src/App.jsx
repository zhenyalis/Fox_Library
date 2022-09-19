import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BasicTheme } from "./components/Config/Config";
import { Routes, Route } from "react-router-dom";
import { StartedPage } from "./pages/StartedPage";
import { YourOrdesPage } from "./pages/YourOrdesPage";
import { GlobalStyles } from "./styles/stylesGlobal/global";
import { SettingsPage } from "./pages/SettingsPage";
import { AllBooksPage } from "./pages/AllBooksPage";
import { YourOrdersBooksPage } from "./pages/YourOrdersBooksPage";
import { NotFound } from "./components/NotFound";
import { AuthContextProvider } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/Context/ProtectedRoute";
export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <ThemeProvider theme={BasicTheme}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <AuthContextProvider>
          <WrapperPage className="App">
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<StartedPage />}></Route>
              <Route path="/your-orders" element={<YourOrdesPage />}></Route>

              <Route
                path="/all-books/:id"
                element={<YourOrdersBooksPage />}
              ></Route>
              <Route path="/settings" element={<SettingsPage />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
              <Route
                path="/all-books"
                element={
                  <ProtectedRoute>
                    <AllBooksPage searchValue={searchValue} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </WrapperPage>
        </AuthContextProvider>
      </SearchContext.Provider>
    </ThemeProvider>
  );
}

export const WrapperPage = styled.div`
  max-width: 100%;
  padding-top: 30px;
  background: #fafafa;
`;

export default App;
