const websites = [
  {
    name: "AI Insider",
    url: "https://www.aiinsider.org/"
  },
  {
    name: "OpenAI",
    url: "https://openai.com/"
  },
  {
    name: "DeepMind",
    url: "https://deepmind.com/"
  },
  {
    name: "AI Trends",
    url: "https://www.aitrends.com/"
  },
  // Add more websites as needed
];

function searchWebsites() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const websiteList = document.getElementById("websiteList");
  websiteList.innerHTML = "";

  const filteredWebsites = websites.filter(website =>
    website.name.toLowerCase().includes(searchInput)
  );

  filteredWebsites.forEach(website => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = website.url;
    link.textContent = website.name;
    link.target = "_blank";
    listItem.appendChild(link);
    websiteList.appendChild(listItem);
  });
}
