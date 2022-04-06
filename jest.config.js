// For consistent date time parsing both in local and CI server
process.env.TZ = 'GMT';

module.exports = {
    transformIgnorePatterns: [
        'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)'
    ],
    preset: 'react-native',
    moduleDirectories: ['node_modules'],
    setupFiles: ['./jest/setup.ts']
};
