document.addEventListener("DOMContentLoaded", function () {
    // Create the banner element
    let banner = document.createElement("div");
    banner.id = "announcement-banner";
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#ffcc00";
    banner.style.color = "#000";
    banner.style.textAlign = "center";
    banner.style.padding = "10px";
    banner.style.fontSize = "16px";
    banner.style.zIndex = "1000";
    banner.innerHTML = "🚀 Big announcement! Check out our latest updates. <a href='#' style='color: #000; text-decoration: underline;'>Learn more</a>";
    
    // Create close button
    let closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.marginLeft = "20px";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontWeight = "bold";
    
    closeButton.onclick = function () {
        banner.style.display = "none";
    };
    
    banner.appendChild(closeButton);
    
    // Add the banner to the top of the body
    document.body.prepend(banner);
});
