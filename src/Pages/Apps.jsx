import React from 'react';
import useApps from '../hooks/useApps';

const Apps = () => {
      const { apps } = useApps()   
    return (
        <div>
           Products: {apps.length}
        </div>
    );
};

export default Apps;