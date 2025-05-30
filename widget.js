document.getElementById("payBtn").addEventListener("click", async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/create-checkout-session",
      { method: "POST" }
    );
    const data = await res.json();
    if (data.sessionId) {
      window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
    }
  } catch (error) {
    console.error("Payment initiation failed:", error);
  }
});

// Simulate webhook response handling (mock)
window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    const ticketCount = urlParams.get("tickets") || 1;
    document.getElementById(
      "ticketStatus"
    ).textContent = `✅ You have ${ticketCount} ticket(s)`;
  }
});
