import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";
// Interface of middleware
interface Middleware {
  handler(req: Request, res: Response, next: NextFunction): void;
}
// Class to validate geolocation
class ValidateGeoLocation implements Middleware {
  private allowedCountry = "IN";

  public handler(req: Request, res: Response, next: NextFunction) {
    // Gets the IP from header
    let ip = req.headers["x-forwarded-for"] || req.ip;
    // If the IP is in the form of array, take the 1st part
    if (Array.isArray(ip)) {
      ip = ip[0];
    }
    // If the IP includes ::fff: string then remove it
    if (typeof ip === "string" && ip.includes("::ffff:")) {
      ip = ip.split("::ffff:")[1];
    }
    // If we don't get string value in the end
    if (typeof ip !== "string") {
      return res.status(400).json({ error: "Unable to determine IP address" });
    }
    // This means that server is running locally
    if (ip === "::1" || ip === "127.0.0.1") {
      console.log("Localhost access, skipping geo check");
      return next();
    }
    // Gets the location info using IP
    const geo = geoip.lookup(ip);
    // Checks the final condition
    if (!geo || geo.country !== this.allowedCountry) {
      return res.status(403).json({ error: "Access denied from your region." });
    }

    next();
  }
}

export default new ValidateGeoLocation();