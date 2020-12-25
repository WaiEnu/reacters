import * as React from 'react'
import Pane from '../../components/Pane'
import { ToggleDarkMode } from '../../components/ToggleDarkMode';
import light from './dark.png'
import dark from './light.png'

export default function Profile() {
  return (
  <Pane title="profile">
    <h1>Profile Page</h1>
    <div>
      <main>
        <div className="flex h-full justify-center">
          <ToggleDarkMode />
        </div>
      </main>
    </div>
  </Pane>
  );
}