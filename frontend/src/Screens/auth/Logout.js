import { baseurl } from "../../Utils/api";

const handleLogout = async () => {
    try {
        await fetch(baseurl+"Users/logout", {
            method: "POST",
            credentials: "include", // Ensures cookies are included
        });

        // ✅ Clear all storage (Local, Session, and Cookies)
        localStorage.clear();
        sessionStorage.clear();
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        alert("Logged out successfully!");
        window.location.href = "/login"; // Redirect to login page
    } catch (error) {
        alert("Logout failed. Try again.");
    }
};
