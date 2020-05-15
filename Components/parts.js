import React from "react";
import Dash from 'react-native-dash';
import { theme } from '../styles/theme';

export const DashedLine = () => {
return (
<Dash 
dashGap = {3}
dashColor = {theme.colors.lineGrey}
style={{marginTop: 22, marginBottom: 10, width:500,}
}
/>
);
}

