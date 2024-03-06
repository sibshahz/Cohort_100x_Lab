interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}
//use either one of readonly or Readonly techniques
const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};