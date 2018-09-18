import * as React from 'react';

export interface InterfaceAppProps {
  testMessage: string;
}

const mockItems = ['First', 'Second', 'Third'];

class App extends React.Component<InterfaceAppProps, {}> {
  public render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default App;
