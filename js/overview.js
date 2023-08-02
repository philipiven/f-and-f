const makePayment = async () => {
  const response = await fetch(
    "https://hooks.zapier.com/hooks/catch/1888053/bgwofce/",
    {
      method: "POST",
      body: JSON.stringify({
        customerId: "dummy",
        action: "getScore",
        customerSessionId: "jgh875wdwlv0skue70",
        activityType: "MAKE_PAYMENT",
        uuid: Date.now(),
        brand: "SD",
        solution: "ATO",
      }),
    }
  );
  if (response.status === 200) {
    window.location.replace("/payment-success.html");
  } else {
    alert("Payment failed");
  }
};

window.onload = function () {
  cdApi.changeContext("overview");
  cdApi.setCustomerSessionId("jgh875wdwlv0skue70");
  document
    .getElementById("make-payment-btn")
    .addEventListener("click", makePayment);
};
