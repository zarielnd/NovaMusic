// Example: expose APIs to renderer
import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
  ping: () => "pong",
});
