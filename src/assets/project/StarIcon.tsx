export interface StarIconProps {
    isActive: boolean;
}

export const StarIcon = ({ isActive }: StarIconProps) => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="ic_like_40_off_01 1" clip-path="url(#clip0_559_4332)">
                <g id="ic_like_40_off_01">
                    <path
                        id="&#237;&#140;&#168;&#236;&#138;&#164; 5668"
                        d="M18.5672 8.82405C18.713 8.57378 18.9218 8.36611 19.1729 8.22177C19.424 8.07743 19.7086 8.00146 19.9982 8.00146C20.2878 8.00146 20.5724 8.07743 20.8235 8.22177C21.0746 8.36611 21.2834 8.57378 21.4292 8.82405L24.2892 13.7311C24.4001 13.9213 24.5477 14.0875 24.7235 14.2201C24.8993 14.3526 25.0998 14.4488 25.3132 14.5031L30.7472 15.8851C31.0171 15.9542 31.2653 16.0901 31.4691 16.2802C31.6728 16.4704 31.8254 16.7086 31.9131 16.9731C32.0007 17.2377 32.0204 17.52 31.9705 17.7941C31.9205 18.0682 31.8025 18.3254 31.6272 18.5421L27.9212 23.1261C27.6553 23.4552 27.5248 23.8732 27.5562 24.2951L27.9922 30.2151C28.0139 30.4999 27.9616 30.7855 27.8405 31.0442C27.7193 31.3029 27.5334 31.5259 27.3007 31.6916C27.068 31.8573 26.7964 31.96 26.5123 31.9899C26.2283 32.0198 25.9413 31.9757 25.6792 31.8621L20.6592 29.6771C20.451 29.5864 20.2263 29.5397 19.9992 29.5397C19.7721 29.5397 19.5474 29.5864 19.3392 29.6771L14.3182 31.8611C14.0565 31.9745 13.7699 32.0185 13.4861 31.9888C13.2024 31.9592 12.9311 31.8568 12.6986 31.6915C12.466 31.5263 12.28 31.3039 12.1585 31.0458C12.037 30.7877 11.9842 30.5026 12.0052 30.2181L12.4412 24.2981C12.4726 23.8762 12.342 23.4582 12.0762 23.1291L8.37019 18.5421C8.19492 18.3254 8.07688 18.0682 8.02694 17.7941C7.97699 17.52 7.99672 17.2377 8.08433 16.9731C8.17194 16.7086 8.32462 16.4704 8.52833 16.2802C8.73204 16.0901 8.98026 15.9542 9.25019 15.8851L14.6842 14.5031C14.8977 14.4487 15.0982 14.3523 15.274 14.2196C15.4498 14.0869 15.5974 13.9205 15.7082 13.7301L18.5672 8.82405Z"
                        fill={isActive ? "#FFC814" : "white"}
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_559_4332">
                    <rect width="40" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
