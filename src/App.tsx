/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personal from './pages/Personal';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  );
}
