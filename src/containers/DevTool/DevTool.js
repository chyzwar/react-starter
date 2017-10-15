import React from 'react';
import createDevTools from 'redux-devtools/lib/createDevTools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const devTools = (
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor />
  </DockMonitor>
);

export default createDevTools(devTools);
