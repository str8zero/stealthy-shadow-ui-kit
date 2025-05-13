
import { useAuth } from "@/components/auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { UserSettings } from "@/components/user/UserSettings";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Redirect to auth page if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
          <UserSettings />
        </div>
      </main>
      <Footer />
    </div>
  );
}
