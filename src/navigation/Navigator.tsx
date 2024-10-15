import { useEffect, useState } from "react";
import AsyncStorageManager from "@src/storage/AsyncStorageManager";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";

const Navigator = () => {
  const storageManager = AsyncStorageManager.getInstance();

  const [loginUserId, setLoginUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoginUserId = async () => {
      const id = await storageManager.getLoginUserId();
      setLoginUserId(id || null);
      setLoading(false);
    };

    fetchLoginUserId();
  }, []);

  if (loading) {
    return null;
  }

  return loginUserId ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default Navigator;
