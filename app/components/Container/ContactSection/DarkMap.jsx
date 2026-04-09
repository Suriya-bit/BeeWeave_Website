"use client";

export default function DarkMap() {
    return (
        <div className="w-full h-[400px] overflow-hidden">
            <iframe
                src="https://maps.google.com/maps?q=chennai&z=13&output=embed"
                className="w-full h-full border-0"
                style={{
                    filter: "invert(95%) hue-rotate(180deg) grayscale(30%) contrast(85%) brightness(85%)"
                }}
            ></iframe>
        </div>
    );
}