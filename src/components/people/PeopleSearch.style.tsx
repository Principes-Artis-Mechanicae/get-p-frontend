import styled from "@emotion/styled";

export default interface IPeopleSearchWrapper {
    width: string;
    height: string;
}

// export interface IPeopleCheckBox {
//     selected: boolean;
// }

export const PeopleSearchWrapper = styled.div<IPeopleSearchWrapper>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const PeopleSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 8px;
    text-align: left;
    width: 100%;
    height: 100%;
`;

export const PeopleSearchHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
`;

export const PeopleSearchBar = styled.input`
    background-color: #f9fafa;
    background-image: url("searchicon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    width: 90%;
    /* width: inherit; */
    padding: 13px;
`;

export interface ITotalProjectIcon {
    checked: boolean;
}

export const TotalProjectIcon: React.FC<ITotalProjectIcon> = ({ checked }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_857_3113)">
                    <path
                        d="M14 3H10C6.13401 3 3 6.13401 3 10V14C3 17.866 6.13401 21 10 21H14C17.866 21 21 17.866 21 14V10C21 6.13401 17.866 3 14 3Z"
                        fill={checked ? "#476ff1" : "#ECF0FE"}
                    />
                    <path
                        d="M11.4483 7.51203C11.5036 7.41495 11.5836 7.33424 11.6802 7.2781C11.7768 7.22196 11.8866 7.19238 11.9983 7.19238C12.11 7.19238 12.2198 7.22196 12.3164 7.2781C12.413 7.33424 12.493 7.41495 12.5483 7.51203L13.6423 9.38703C13.6842 9.46071 13.7406 9.52522 13.8079 9.57675C13.8752 9.62828 13.9522 9.66578 14.0343 9.68703L16.1143 10.212C16.2173 10.2388 16.3119 10.291 16.3895 10.3639C16.4671 10.4367 16.5252 10.5278 16.5584 10.6289C16.5916 10.73 16.599 10.8379 16.5797 10.9425C16.5605 11.0472 16.5153 11.1454 16.4483 11.228L15.0323 12.982C14.9305 13.1078 14.8805 13.2677 14.8923 13.429L15.0593 15.694C15.0674 15.8029 15.0472 15.9121 15.0008 16.011C14.9544 16.1098 14.8833 16.195 14.7943 16.2584C14.7053 16.3217 14.6015 16.361 14.4929 16.3725C14.3843 16.384 14.2746 16.3673 14.1743 16.324L12.2533 15.488C12.1736 15.4534 12.0877 15.4355 12.0008 15.4355C11.9139 15.4355 11.828 15.4534 11.7483 15.488L9.82729 16.324C9.72702 16.3673 9.61728 16.384 9.50867 16.3725C9.40007 16.361 9.29626 16.3217 9.20729 16.2584C9.11831 16.195 9.04718 16.1098 9.00076 16.011C8.95434 15.9121 8.9342 15.8029 8.94229 15.694L9.10829 13.429C9.12009 13.2677 9.07003 13.1078 8.96829 12.982L7.54829 11.228C7.4813 11.145 7.43627 11.0465 7.41733 10.9415C7.39839 10.8366 7.40616 10.7285 7.43992 10.6273C7.47368 10.5261 7.53235 10.4351 7.61053 10.3625C7.6887 10.2899 7.78388 10.2382 7.88729 10.212L9.96729 9.68303C10.0494 9.66178 10.1264 9.62428 10.1937 9.57275C10.261 9.52122 10.3173 9.45671 10.3593 9.38303L11.4483 7.51203Z"
                        fill="#F8F6F8"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_857_3113">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};

export const PeopleSearchOptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const PeopleSearchCheckBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`;

export const PeopleSearchOptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const PeopleSearchOptionItem = styled.div`
    cursor: pointer;
`;
