import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeCatalogApp from "./HomeCatalogApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <main className="py-3" style={{ minHeight: "100vh" }}>
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/catalog" replace />} />
            <Route path="/catalog/*" element={<HomeCatalogApp />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  </StrictMode>
);
