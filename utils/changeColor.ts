const themes = {
  darkBlue: {
    '--primary-color': 'hsl(211, 25%, 30%)',
    '--primary-black-color': 'hsl(213, 28%, 19%)',
    '--primary-light-color': 'hsl(216, 50%, 96%)',
    '--secondary-color': 'hsl(36, 100%, 50%)',
    '--grey-color': 'hsl(0, 0%, 62%)',
    '--grey-black-color': 'hsl(220, 4%, 16%)',
  },
  pink: {
    '--primary-color': 'hsl(328, 81%, 29%)',
    '--primary-black-color': 'hsl(328, 81%, 9%)',
    '--primary-light-color': 'hsl(328, 81%, 95%)',
    '--secondary-color': 'hsl(291, 100%, 49%)',
    '--grey-color': 'hsl(0, 0%, 62%)',
    '--grey-black-color': 'hsl(220, 4%, 16%)',
  },
};

type ThemeVariant = keyof typeof themes;

export default function changeColor(theme: ThemeVariant) {
  const root = document?.documentElement;
  if (!root) return;
  Object.entries(themes[theme]).forEach(([key, value]) => root.style.setProperty(key, value));
}
