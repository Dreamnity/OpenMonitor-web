import DiscordProvider from "@auth/core/providers/discord";
export const authOptions = {
  providers: [
    // @ts-expect-error Types are wrong
    DiscordProvider({
      clientId: '1172104119851417620',
      clientSecret: 'Bw3ZccyPlL5Uzo74PVLPsrs3-5FCcYwU',
    }),
  ],
  secret:'hi'
};
