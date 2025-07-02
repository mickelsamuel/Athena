'use client';

import React from 'react';

const WorkspaceAreas = () => {
  const workspaces = [
    {
      type: 'brainstorm',
      icon: '💭',
      name: 'Brainstorm Zone',
      activity: '3 active sessions'
    },
    {
      type: 'meeting',
      icon: '📋',
      name: 'Meeting Room',
      activity: 'Next: 2:30 PM'
    },
    {
      type: 'focus',
      icon: '🎯',
      name: 'Focus Area',
      activity: '2 deep work'
    }
  ];

  return (
    <>
      {workspaces.map((workspace) => (
        <div key={workspace.type} className={`workspace-area ${workspace.type}`}>
          <div className="workspace-icon">{workspace.icon}</div>
          <div className="workspace-name">{workspace.name}</div>
          <div className="workspace-activity">{workspace.activity}</div>
        </div>
      ))}
    </>
  );
};

export default WorkspaceAreas;