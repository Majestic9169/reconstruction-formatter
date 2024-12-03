export const HighlightButton = (buttonId: string) => {
  const path = document.getElementById(buttonId);
  if (path) {
    path.style.borderWidth = "1px";
    path.style.borderColor = "#1e293b";
    path.style.backgroundColor = "#fff";
    path.style.color = "#0d172a";
    path.style.boxShadow = "2px 4px 4px rgba(166, 175, 195, 0.5)";
  }
}

export const resetAllButton = (noButtons: number) => {
  for (let i = 1; i <= noButtons; i++) {
    const path = document.getElementById(`solve-${i}-button`);
    if (path) {
      path.style.backgroundColor = "#1e293b";
      path.style.color = "#fff";
      path.style.boxShadow = "0px 1px 2px rgba(166, 175, 195, 0.25)";
    }

  }
}

