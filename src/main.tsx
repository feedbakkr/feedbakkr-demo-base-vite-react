import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import DemoModal from "./components/DemoModal";
import Home from "./pages/Home";
import Features from "./pages/Features";
import DocsIndex from "./pages/DocsIndex";
import DocsGettingStarted from "./pages/DocsGettingStarted";
import DocsSdkSetup from "./pages/DocsSdkSetup";
import DocsTroubleshooting from "./pages/DocsTroubleshooting";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

createRoot(rootEl).render(
	<StrictMode>
		<BrowserRouter>
			<DemoModal />
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="features" element={<Features />} />
					<Route path="docs" element={<DocsIndex />} />
					<Route path="docs/getting-started" element={<DocsGettingStarted />} />
					<Route path="docs/sdk-setup" element={<DocsSdkSetup />} />
					<Route path="docs/troubleshooting" element={<DocsTroubleshooting />} />
					<Route path="contact" element={<Contact />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
