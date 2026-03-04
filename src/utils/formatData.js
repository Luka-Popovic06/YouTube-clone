export const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now - past;

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) {
    return `pre ${seconds} ${seconds === 1 ? "sekundu" : "sekundi"}`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `pre ${minutes} ${minutes === 1 ? "minut" : "minuta"}`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `pre ${hours} ${hours === 1 ? "sat" : "sati"}`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `pre ${days} ${days === 1 ? "dan" : "dana"}`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `pre ${months} ${months === 1 ? "mesec" : "meseci"}`;
  }

  const years = Math.floor(months / 12);
  return `pre ${years} ${years === 1 ? "godinu" : "godina"}`;
};
