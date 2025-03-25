import { connectDB } from "@/lib/db";
import Admin from "@/models/admin.model";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Authentication configuration for NextAuth.
 * 
 * - This setup allows admin users to login.
 * - It connects to the database, verifies credentials, and manages session data.
 */
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      
      /**
       * Authorization function to verify admin credentials.
       * 
       * @param {Object} credentials - The login credentials.
       * @returns {Object | null} - Returns admin user data if authenticated, otherwise throws an error.
       */
      async authorize(credentials) {
        await connectDB(); // Ensure database connection

        // Find the admin in the database by email
        const admin = await Admin.findOne({ email: credentials?.email });

        if (!admin || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // Verify password using bcrypt
        const isPasswordValid = await bcrypt.compare(credentials.password, admin.password);
        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        // Return admin's data
        return { 
          id: admin._id, 
          firstName: admin.firstName, 
          lastName: admin.lastName, 
          phone: admin.phone, 
          avatar: admin.avatar, 
          email: admin.email 
        };
      },
    }),
  ],

  callbacks: {
    /**
     * Customizes the session object.
     * 
     * @param {Object} session - The current session object.
     * @param {Object} token - The token containing user data.
     * @returns {Object} - The updated session object.
     */
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/admin/login", // Custom admin login page route
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
