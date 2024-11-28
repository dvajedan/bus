const inputField = document.getElementById("input-field");
const send = document.getElementById("send");

window.onload = () => {
  window.scrollTo(0, document.body.scrollHeight);
  inputField.focus();
};

const writing = () => {
  document.getElementById("audio").style.display = "none";
  document.getElementById("plus").style.display = "none";
  document.getElementById("picture").style.display = "none";
  document.getElementById("right-arrow").style.display = "block";
  document.getElementById("send").style.display = "block";
};

const notWriting = () => {
  document.getElementById("audio").style.display = "block";
  document.getElementById("plus").style.display = "block";
  document.getElementById("picture").style.display = "block";
  document.getElementById("right-arrow").style.display = "none";
  document.getElementById("send").style.display = "none";
};

inputField.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value.length > 0) {
    writing();
  } else {
    notWriting();
  }
});

send.addEventListener("click", () => {
  const value = inputField.value;
  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const after90 = new Date();
  after90.setMinutes(after90.getMinutes() + 90);
  const afterHours = after90.getHours();
  const afterMinutes = after90.getMinutes();
  const afterSeconds = after90.getSeconds();
  const afterTime = `${afterHours.toString().padStart(2, "0")}:${afterMinutes
    .toString()
    .padStart(2, "0")}:${afterSeconds.toString().padStart(2, "0")}`;
  const randNum = Math.floor(100000 + Math.random() * 900000);

  if (value.length > 0) {
    const message = document.createElement("div");
    message.classList.add("column");
    message.id = "one-message";

    const messageTime = document.createElement("div");
    messageTime.classList.add("message-time");
    messageTime.innerHTML = `<p>${currentDay} • ${currentTime}</p>`;

    const sentMessage = document.createElement("div");
    sentMessage.classList.add("message-sent");
    sentMessage.innerHTML = `<p>${value}</p>`;

    message.appendChild(messageTime);
    message.appendChild(sentMessage);
    document.getElementById("all-messages").appendChild(message);
    inputField.value = "";
    notWriting();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

    setTimeout(() => {
      const receivedMessage = document.createElement("div");
      receivedMessage.classList.add("message-recived");
      receivedMessage.innerHTML = `<p>U Beogradu, za broj telefona <u>381637412xxx</u>, ste kupili VREMENSKU KARTU OD 90 MINUTA U ZONI A po ceni od 50 din + osnovna cena poruke, koja vazi do <u>${day}.${month}.${year} ${afterTime}</u>.<br/>
                                    Karta broj: <u>0028${randNum}</u>.<br/>
                                    Placanjem operateru izmirujete dugovanja za ovu kartu prema JKP Naplata prevozne usluge Beograd.<br/>
                                    Sacuvajte ovu poruku.
                                </p>`;

      const time = document.createElement("p");
      time.classList.add("time");
      time.textContent = `${currentTime}`;
      message.appendChild(receivedMessage);
      message.appendChild(time);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 5000);
  }
});
