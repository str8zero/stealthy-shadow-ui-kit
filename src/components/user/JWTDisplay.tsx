
import { useState, useEffect } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Key } from "lucide-react";

export function JWTDisplay() {
  const { session } = useAuth();
  const [jwtData, setJwtData] = useState<any>(null);
  const [showRaw, setShowRaw] = useState(false);

  useEffect(() => {
    if (session?.access_token) {
      // Parse JWT token (split by dots, take the middle part, and decode)
      try {
        const base64Url = session.access_token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join('')
        );
        setJwtData(JSON.parse(jsonPayload));
      } catch (error) {
        console.error("Error parsing JWT:", error);
        setJwtData({ error: "Could not parse JWT token" });
      }
    }
  }, [session]);

  if (!session) {
    return null;
  }

  return (
    <Card className="w-full max-w-lg mx-auto border-primary/10 shadow-lg glass-effect">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Key className="h-5 w-5 text-primary" />
          <CardTitle>JWT Token Information</CardTitle>
        </div>
        <CardDescription>
          View your current session token information and custom claims
        </CardDescription>
      </CardHeader>
      <CardContent>
        {jwtData ? (
          <div className="space-y-4">
            <div className="flex justify-between">
              <Badge variant="outline" className="bg-primary/5">
                Subject: {jwtData.sub}
              </Badge>
              <Badge variant="outline" className="bg-primary/5">
                Expires: {new Date(jwtData.exp * 1000).toLocaleString()}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Custom Claims</h3>
              <div className="bg-muted/40 rounded-md p-2">
                {jwtData.user_role && (
                  <div className="flex gap-2 mb-1">
                    <span className="font-medium">Role:</span>
                    <span>{jwtData.user_role}</span>
                  </div>
                )}
                {jwtData.full_name && (
                  <div className="flex gap-2 mb-1">
                    <span className="font-medium">Name:</span>
                    <span>{jwtData.full_name}</span>
                  </div>
                )}
                {jwtData.custom_app_data && (
                  <div className="flex gap-2 mb-1">
                    <span className="font-medium">Last Sign In:</span>
                    <span>{new Date(jwtData.custom_app_data.last_signin).toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowRaw(!showRaw)}
                className="text-xs"
              >
                {showRaw ? "Hide Raw JWT Data" : "Show Raw JWT Data"}
              </Button>
              
              {showRaw && (
                <pre className="text-xs mt-2 bg-muted/40 p-2 rounded-md overflow-auto max-h-[200px]">
                  {JSON.stringify(jwtData, null, 2)}
                </pre>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center py-4">
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            <span>Loading token data...</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
