// 1 H -> 3600 s
// x h -> 123123 S

function humanReadableTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60

    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

const test1 = 359999;

humanReadableTime(test1);