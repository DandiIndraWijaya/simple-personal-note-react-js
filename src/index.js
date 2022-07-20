import React from 'react';
import { createRoot } from 'react-dom/client';
import PersonalNotes from './App';

import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<PersonalNotes />);
