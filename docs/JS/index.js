const styleSheet = document.createElement("style");
styleSheet.type = "text/css";

styleSheet.innerText = `
@keyframes slideUpSlow {
    from {
        transform: translateY(1000px);
    }
}

@keyframes slideUp {
    from {
        transform: translateY(500px);
    }
}
`;

document.head.appendChild(styleSheet);