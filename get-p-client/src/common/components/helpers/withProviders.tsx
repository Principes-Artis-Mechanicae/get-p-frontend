import React from "react";
import { cloneElement } from "react";

/**
 *
 * @param providers Component 를 감쌀 Context Provider 컴포넌트 배열
 * @param Component Context Provider 로 감쌀 Component
 * @returns ProvidersWrappedComponent
 *
 * @example PageComponent 에 ProviderA, ProviderB, ProviderC 를 감싼 컴포넌트
 * const WrappedPageComponent = withProviders(
 *      [
 *          <ProviderA/>
 *          <ProviderB/>
 *          <ProviderC/>
 *      ],
 *      function PageComponent() {
 *          return <></>
 *      }
 * )
 */
export const withProviders = <C extends React.ComponentType, Props extends JSX.LibraryManagedAttributes<C, object>>(
    providers: React.ReactElement[],
    Component: C,
) => {
    return (props: Props) => {
        const ProvidersWrappedComponent = providers.reduceRight(
            (providers, provider) => {
                return cloneElement(provider, {}, providers);
            },
            <Component {...props} />,
        );
        return ProvidersWrappedComponent;
    };
};
