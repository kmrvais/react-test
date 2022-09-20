import React, {useContext} from 'react';
import Basket from "../basket";
import {CatalogContext} from "../../contexts/catalog";

const Header = () => {
    const [CatalogState, dispatch] = useContext(CatalogContext);
    let quantity = CatalogState.basket.length;
    console.log('quantity', quantity)
    return (
        <header>
            <div className="container header__container">
                <a className="header__logo" title="logo" href="#">
                    <svg width="266" height="78" viewBox="0 0 266 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path d="M23.2613 42.592C23.2613 40.352 23.5173 38.16 24.0293 36.016C24.5733 33.84 25.3253 31.792 26.2853 29.872C27.2453 27.92 28.3813 26.144 29.6933 24.544C31.0373 22.912 32.4933 21.504 34.0613 20.32C35.6613 19.136 37.3573 18.224 39.1493 17.584C40.9413 16.912 42.7813 16.576 44.6693 16.576C46.8773 16.576 48.5893 17.04 49.8053 17.968C51.0533 18.896 51.6773 20.192 51.6773 21.856C51.6773 22.496 51.5813 23.152 51.3893 23.824C51.2293 24.496 50.9733 25.168 50.6213 25.84C50.3013 26.48 49.9173 27.104 49.4693 27.712C49.0213 28.32 48.5253 28.848 47.9813 29.296C47.1493 29.168 46.4293 28.8 45.8213 28.192C45.2133 27.552 44.8293 26.816 44.6693 25.984C45.7893 25.056 46.6693 24.096 47.3093 23.104C47.9813 22.08 48.3173 21.152 48.3173 20.32C48.3173 18.912 47.4373 18.208 45.6773 18.208C44.9413 18.208 44.1733 18.368 43.3733 18.688C42.6053 18.976 41.8213 19.392 41.0213 19.936C40.2213 20.48 39.4373 21.136 38.6693 21.904C37.9333 22.672 37.2453 23.52 36.6053 24.448C32.1573 30.848 29.9333 37.392 29.9333 44.08C29.9333 46.448 30.3013 48.352 31.0373 49.792C31.7733 51.232 32.7493 52.08 33.9653 52.336C35.3413 52.016 37.0853 51.136 39.1973 49.696C41.3093 48.256 43.6133 46.384 46.1093 44.08C46.4293 44.4 46.6213 44.736 46.6853 45.088C45.7573 46.304 44.7973 47.472 43.8053 48.592C42.8133 49.712 41.8213 50.736 40.8293 51.664C39.8693 52.592 38.9093 53.408 37.9493 54.112C37.0213 54.816 36.1573 55.36 35.3573 55.744C31.3893 55.68 28.3813 54.544 26.3333 52.336C24.2853 50.128 23.2613 46.88 23.2613 42.592ZM55.4997 53.68C53.6757 53.488 52.2197 52.688 51.1317 51.28C50.0437 49.872 49.4997 48.08 49.4997 45.904C49.4997 44.624 49.6917 43.296 50.0757 41.92C50.4597 40.544 51.0037 39.216 51.7077 37.936C52.4117 36.624 53.2437 35.392 54.2037 34.24C55.1637 33.088 56.2037 32.096 57.3237 31.264C59.0837 29.952 60.7317 29.296 62.2677 29.296C63.2917 29.84 64.2997 30.976 65.2917 32.704C65.4517 32.704 65.5957 32.704 65.7237 32.704C65.8517 32.672 65.9957 32.656 66.1557 32.656C67.8517 32.656 68.6997 34.16 68.6997 37.168C68.6997 39.184 68.3637 41.104 67.6917 42.928C67.0517 44.72 66.1397 46.352 64.9557 47.824C63.8037 49.296 62.4117 50.544 60.7797 51.568C59.1797 52.56 57.4197 53.264 55.4997 53.68ZM57.9477 38.56C57.4037 39.296 56.8917 40.096 56.4117 40.96C55.9317 41.824 55.5157 42.704 55.1637 43.6C54.8117 44.464 54.5397 45.312 54.3477 46.144C54.1557 46.944 54.0597 47.664 54.0597 48.304C54.0597 49.072 54.1877 49.808 54.4437 50.512C54.6997 51.216 54.9877 51.616 55.3077 51.712C56.7477 51.392 58.0597 50.8 59.2437 49.936C60.4597 49.04 61.4997 47.936 62.3637 46.624C63.2597 45.312 63.9477 43.824 64.4277 42.16C64.9397 40.496 65.1957 38.72 65.1957 36.832C65.1957 36 65.1477 35.344 65.0517 34.864C64.9557 34.384 64.7957 33.968 64.5717 33.616C63.1637 34.032 61.8997 34.704 60.7797 35.632C59.6917 36.56 58.7477 37.536 57.9477 38.56ZM98.7672 37.264C98.2552 37.296 97.6312 37.632 96.8952 38.272C96.1592 38.88 95.3592 39.68 94.4952 40.672C93.6632 41.632 92.7832 42.704 91.8552 43.888C90.9592 45.072 90.0792 46.256 89.2152 47.44C88.3832 48.592 87.5992 49.68 86.8632 50.704C86.1272 51.728 85.5032 52.544 84.9912 53.152C84.2872 52.864 83.6792 52.448 83.1672 51.904C82.6552 51.328 82.2872 50.624 82.0632 49.792C82.2232 48.8 82.4472 47.776 82.7352 46.72C83.0232 45.632 83.3912 44.512 83.8392 43.36C84.3192 42.208 84.8952 41.008 85.5672 39.76C86.2712 38.48 87.1192 37.136 88.1112 35.728C87.6312 35.76 86.9752 36.112 86.1432 36.784C85.3112 37.424 84.4152 38.272 83.4552 39.328C82.4952 40.352 81.5032 41.52 80.4792 42.832C79.4552 44.112 78.4952 45.376 77.5992 46.624C76.4152 48.288 75.4232 49.744 74.6232 50.992C73.8552 52.24 73.2952 52.976 72.9432 53.2C72.1112 52.592 71.5352 51.936 71.2152 51.232C70.8952 50.528 70.6552 49.744 70.4952 48.88C70.5272 48.112 70.6392 47.152 70.8312 46C71.0552 44.848 71.3592 43.664 71.7432 42.448C72.4792 40.112 73.4232 37.792 74.5752 35.488C75.7592 33.184 76.8952 31.072 77.9832 29.152C78.8792 29.344 79.6792 29.648 80.3832 30.064C81.1192 30.48 81.8872 31.088 82.6872 31.888C82.3672 32.88 81.8712 33.936 81.1992 35.056C80.5272 36.144 79.8232 37.296 79.0872 38.512C78.3512 39.728 77.6792 40.976 77.0712 42.256C76.4632 43.536 76.0632 44.832 75.8712 46.144C76.7672 44.864 77.8232 43.392 79.0392 41.728C80.2872 40.064 81.5512 38.496 82.8312 37.024C84.1432 35.552 85.4392 34.304 86.7192 33.28C87.9992 32.256 89.1512 31.744 90.1752 31.744C90.5592 31.744 90.9752 31.808 91.4232 31.936C91.8712 32.064 92.2872 32.224 92.6712 32.416C93.0552 32.608 93.3752 32.8 93.6312 32.992C93.8872 33.152 94.0312 33.28 94.0632 33.376C93.9032 34.016 93.5192 34.896 92.9112 36.016C92.3352 37.104 91.7112 38.256 91.0392 39.472C90.3672 40.688 89.7432 41.872 89.1672 43.024C88.5912 44.144 88.2552 45.04 88.1592 45.712C89.7272 43.568 91.1992 41.632 92.5752 39.904C93.9512 38.144 95.2472 36.64 96.4632 35.392C97.6792 34.144 98.7992 33.184 99.8232 32.512C100.879 31.84 101.871 31.504 102.799 31.504C103.439 31.504 104.031 31.68 104.575 32.032C105.151 32.352 105.551 32.832 105.775 33.472C105.487 34.432 105.007 35.584 104.335 36.928C103.695 38.272 103.039 39.696 102.367 41.2C101.695 42.672 101.087 44.128 100.543 45.568C100.031 47.008 99.7752 48.304 99.7752 49.456C99.7752 50.128 99.8712 50.576 100.063 50.8C100.255 50.992 100.527 51.088 100.879 51.088C101.263 51.088 101.615 51.024 101.935 50.896C102.287 50.736 102.543 50.656 102.703 50.656C102.895 50.784 103.007 50.944 103.039 51.136C103.071 51.328 103.087 51.504 103.087 51.664C102.447 52.176 101.791 52.592 101.119 52.912C100.447 53.264 99.6952 53.44 98.8632 53.44C98.0952 53.44 97.4552 53.312 96.9432 53.056C96.4632 52.8 96.0632 52.448 95.7432 52C95.4232 51.552 95.1992 51.04 95.0712 50.464C94.9432 49.888 94.8792 49.264 94.8792 48.592C94.8792 47.504 95.0232 46.432 95.3112 45.376C95.5992 44.288 95.9352 43.264 96.3192 42.304C96.7352 41.312 97.1672 40.4 97.6152 39.568C98.0632 38.704 98.4472 37.936 98.7672 37.264ZM110.132 65.872C109.332 65.552 108.852 64.944 108.692 64.048C108.564 63.184 108.02 62.48 107.06 61.936C107.316 60.304 107.604 58.656 107.924 56.992C108.244 55.328 108.644 53.44 109.124 51.328C109.636 49.184 110.26 46.704 110.996 43.888C111.764 41.04 112.724 37.6 113.876 33.568C112.82 33.568 111.988 33.584 111.38 33.616C110.772 33.648 110.18 33.712 109.604 33.808C109.476 33.68 109.364 33.504 109.268 33.28C109.204 33.056 109.172 32.848 109.172 32.656C109.492 32.528 110.148 32.368 111.14 32.176C112.132 31.952 113.22 31.76 114.404 31.6C115.172 29.168 116.052 26.992 117.044 25.072C118.036 23.12 119.108 21.456 120.26 20.08C121.412 18.704 122.628 17.648 123.908 16.912C125.188 16.176 126.484 15.808 127.796 15.808C128.18 15.808 128.548 15.84 128.9 15.904C129.252 15.936 129.524 15.952 129.716 15.952C130.004 15.728 130.388 15.536 130.868 15.376C131.348 15.184 131.764 15.088 132.116 15.088C132.5 15.088 132.996 15.296 133.604 15.712C133.348 16.16 133.076 16.768 132.788 17.536C132.5 18.304 132.26 19.056 132.068 19.792C131.268 22.16 130.42 23.696 129.524 24.4C129.172 24.4 128.98 23.936 128.948 23.008C128.916 22.336 128.82 21.68 128.66 21.04C128.532 20.752 128.436 20.496 128.372 20.272C128.34 20.048 128.324 19.76 128.324 19.408C128.324 19.216 128.34 18.992 128.372 18.736C128.404 18.448 128.468 17.984 128.564 17.344C128.02 17.344 127.412 17.68 126.74 18.352C126.1 19.024 125.412 19.984 124.676 21.232C123.972 22.448 123.252 23.904 122.516 25.6C121.78 27.296 121.076 29.168 120.404 31.216L124.436 31.072C124.596 31.232 124.724 31.6 124.82 32.176C124.948 32.72 125.028 33.296 125.06 33.904L119.78 33.616C118.564 37.232 117.428 40.688 116.372 43.984C115.316 47.28 114.372 50.32 113.54 53.104C112.708 55.888 111.988 58.368 111.38 60.544C110.804 62.752 110.388 64.528 110.132 65.872ZM141.946 44.56C141.21 46.896 140.474 49.024 139.738 50.944C139.002 52.864 138.218 54.624 137.386 56.224C136.554 57.856 135.658 59.344 134.698 60.688C133.738 62.064 132.682 63.36 131.53 64.576C130.058 66.112 128.538 67.28 126.97 68.08C125.402 68.912 123.834 69.328 122.266 69.328C121.466 69.328 120.666 69.232 119.866 69.04C119.098 68.88 118.378 68.64 117.706 68.32C117.002 68.032 116.394 67.68 115.882 67.264C115.338 66.88 114.954 66.464 114.73 66.016C114.73 65.632 114.954 65.296 115.402 65.008C115.786 65.36 116.106 65.632 116.362 65.824C116.618 66.016 116.874 66.176 117.13 66.304C117.354 66.432 117.61 66.512 117.898 66.544C118.154 66.576 118.458 66.592 118.81 66.592C120.634 66.592 122.41 66.048 124.138 64.96C125.898 63.904 127.546 62.384 129.082 60.4C130.65 58.448 132.074 56.064 133.354 53.248C134.634 50.464 135.722 47.344 136.618 43.888C136.202 44.528 135.69 45.312 135.082 46.24C134.474 47.168 133.802 48.096 133.066 49.024C132.33 49.92 131.562 50.736 130.762 51.472C129.994 52.208 129.242 52.704 128.506 52.96C127.994 52.928 127.45 52.816 126.874 52.624C126.33 52.464 125.802 52.224 125.29 51.904C124.81 51.584 124.378 51.2 123.994 50.752C123.61 50.304 123.354 49.792 123.226 49.216C123.226 48.288 123.258 47.552 123.322 47.008C123.386 46.432 123.498 45.808 123.658 45.136C123.946 43.92 124.362 42.544 124.906 41.008C125.482 39.472 126.138 37.968 126.874 36.496C127.642 34.992 128.474 33.6 129.37 32.32C130.298 31.008 131.258 29.984 132.25 29.248C132.506 29.248 132.826 29.28 133.21 29.344C133.594 29.376 133.994 29.456 134.41 29.584C134.826 29.712 135.226 29.872 135.61 30.064C135.994 30.224 136.33 30.448 136.618 30.736C136.266 31.056 135.498 32.128 134.314 33.952C133.13 35.776 131.818 38.4 130.378 41.824C130.218 42.176 130.026 42.688 129.802 43.36C129.578 44.032 129.354 44.736 129.13 45.472C128.938 46.208 128.762 46.928 128.602 47.632C128.442 48.336 128.362 48.896 128.362 49.312C128.362 49.568 128.394 49.76 128.458 49.888C128.554 50.016 128.634 50.112 128.698 50.176C129.274 50.08 130.042 49.616 131.002 48.784C131.962 47.92 133.05 46.592 134.266 44.8C135.034 43.648 135.738 42.512 136.378 41.392C137.018 40.24 137.642 39.088 138.25 37.936C138.89 36.784 139.546 35.6 140.218 34.384C140.89 33.168 141.61 31.92 142.378 30.64C142.794 30.64 143.242 30.688 143.722 30.784C144.202 30.88 144.666 31.008 145.114 31.168C145.562 31.296 145.946 31.456 146.266 31.648C146.618 31.808 146.874 31.984 147.034 32.176C146.042 34.288 145.114 36.352 144.25 38.368C143.386 40.384 142.618 42.448 141.946 44.56Z" fill="#222222"></path>
                            <path d="M178.871 19.648C178.967 20.192 179.031 20.576 179.063 20.8C179.127 20.992 179.159 21.264 179.159 21.616C179.159 22.672 178.919 23.664 178.439 24.592C177.991 25.488 177.367 26.128 176.567 26.512C175.927 25.648 175.143 24.912 174.215 24.304C173.287 23.664 172.263 23.152 171.143 22.768C170.055 22.352 168.919 22.048 167.735 21.856C166.551 21.664 165.399 21.568 164.279 21.568C163.159 21.568 162.103 21.664 161.111 21.856C160.151 22.016 159.287 22.256 158.519 22.576C157.783 22.864 157.191 23.232 156.743 23.68C156.327 24.128 156.119 24.64 156.119 25.216C156.215 25.92 156.647 26.64 157.415 27.376C158.183 28.08 159.127 28.784 160.247 29.488C161.367 30.16 162.599 30.832 163.943 31.504C165.319 32.176 166.663 32.816 167.975 33.424C169.607 34.192 171.015 34.912 172.199 35.584C173.383 36.224 174.359 36.944 175.127 37.744C175.895 38.512 176.471 39.392 176.855 40.384C177.239 41.376 177.431 42.576 177.431 43.984C177.431 45.616 177.159 47.152 176.615 48.592C176.071 50 175.271 51.232 174.215 52.288C173.191 53.344 171.943 54.16 170.471 54.736C168.999 55.344 167.351 55.648 165.527 55.648C163.735 55.648 161.799 55.376 159.719 54.832C157.639 54.288 155.687 53.536 153.863 52.576C152.071 51.648 150.567 50.576 149.351 49.36C148.167 48.112 147.575 46.8 147.575 45.424C147.575 44.784 147.751 43.968 148.103 42.976C148.487 41.984 149.159 40.944 150.119 39.856C150.215 40.816 150.727 41.952 151.655 43.264C152.615 44.576 154.039 45.792 155.927 46.912C157.687 47.936 159.495 48.688 161.351 49.168C163.239 49.616 164.999 49.84 166.631 49.84C168.423 49.84 169.879 49.616 170.999 49.168C172.119 48.72 172.999 48.192 173.639 47.584C174.279 46.944 174.727 46.304 174.983 45.664C175.239 45.024 175.383 44.512 175.415 44.128C175.383 43.488 175.079 42.88 174.503 42.304C173.959 41.696 173.207 41.12 172.247 40.576C171.319 40 170.231 39.424 168.983 38.848C167.735 38.272 166.439 37.696 165.095 37.12C163.079 36.224 161.335 35.392 159.863 34.624C158.423 33.824 157.223 33.024 156.263 32.224C155.335 31.392 154.647 30.528 154.199 29.632C153.783 28.736 153.575 27.712 153.575 26.56C153.575 24.768 154.119 23.072 155.207 21.472C156.295 19.872 157.863 18.656 159.911 17.824C160.935 17.376 162.023 17.056 163.175 16.864C164.359 16.672 165.511 16.576 166.631 16.576C168.743 16.576 170.807 16.864 172.823 17.44C174.839 18.016 176.855 18.752 178.871 19.648ZM180.616 48.928C180.616 47.52 180.952 45.552 181.624 43.024C182.296 40.464 183.24 37.488 184.456 34.096C186.44 28.688 188.296 24.192 190.024 20.608C191.784 16.992 193.496 14.176 195.16 12.16C195.544 12.224 196.008 12.384 196.552 12.64C197.128 12.896 197.688 13.184 198.232 13.504C198.776 13.792 199.256 14.096 199.672 14.416C200.12 14.736 200.408 14.992 200.536 15.184C198.04 18.128 195.848 21.296 193.96 24.688C192.072 28.08 190.344 31.968 188.776 36.352C187.432 40.128 186.408 43.536 185.704 46.576C185 49.584 184.648 52.096 184.648 54.112C184.648 54.656 184.648 54.992 184.648 55.12C184.648 55.248 184.664 55.376 184.696 55.504C184.248 55.44 183.864 55.328 183.544 55.168C183.224 55.008 183.016 54.816 182.92 54.592C182.856 54.432 182.68 54.192 182.392 53.872C182.104 53.584 181.848 53.36 181.624 53.2C181.336 53.008 181.096 52.512 180.904 51.712C180.712 50.88 180.616 49.952 180.616 48.928ZM197.484 53.68C195.66 53.488 194.204 52.688 193.116 51.28C192.028 49.872 191.484 48.08 191.484 45.904C191.484 44.624 191.676 43.296 192.06 41.92C192.444 40.544 192.988 39.216 193.692 37.936C194.396 36.624 195.228 35.392 196.188 34.24C197.148 33.088 198.188 32.096 199.308 31.264C201.068 29.952 202.716 29.296 204.252 29.296C205.276 29.84 206.284 30.976 207.276 32.704C207.436 32.704 207.58 32.704 207.708 32.704C207.836 32.672 207.98 32.656 208.14 32.656C209.836 32.656 210.684 34.16 210.684 37.168C210.684 39.184 210.348 41.104 209.676 42.928C209.036 44.72 208.124 46.352 206.94 47.824C205.788 49.296 204.396 50.544 202.764 51.568C201.164 52.56 199.404 53.264 197.484 53.68ZM199.932 38.56C199.388 39.296 198.876 40.096 198.396 40.96C197.916 41.824 197.5 42.704 197.148 43.6C196.796 44.464 196.524 45.312 196.332 46.144C196.14 46.944 196.044 47.664 196.044 48.304C196.044 49.072 196.172 49.808 196.428 50.512C196.684 51.216 196.972 51.616 197.292 51.712C198.732 51.392 200.044 50.8 201.228 49.936C202.444 49.04 203.484 47.936 204.348 46.624C205.244 45.312 205.932 43.824 206.412 42.16C206.924 40.496 207.18 38.72 207.18 36.832C207.18 36 207.132 35.344 207.036 34.864C206.94 34.384 206.78 33.968 206.556 33.616C205.148 34.032 203.884 34.704 202.764 35.632C201.676 36.56 200.732 37.536 199.932 38.56ZM215.371 33.616C215.211 33.424 215.067 33.024 214.939 32.416C214.811 31.776 214.747 31.232 214.747 30.784C215.579 30.848 216.379 30.912 217.147 30.976C217.915 31.008 218.619 31.04 219.259 31.072C219.739 30.112 220.251 29.168 220.795 28.24C221.371 27.28 221.915 26.416 222.427 25.648C222.971 24.848 223.467 24.176 223.915 23.632C224.395 23.088 224.763 22.736 225.019 22.576C225.339 22.576 225.739 22.64 226.219 22.768C226.731 22.864 227.243 23.008 227.755 23.2C228.267 23.36 228.731 23.536 229.147 23.728C229.563 23.92 229.851 24.112 230.011 24.304C229.051 25.52 228.219 26.656 227.515 27.712C226.843 28.736 226.107 29.92 225.307 31.264C225.947 31.264 226.587 31.248 227.227 31.216C227.899 31.184 228.571 31.136 229.243 31.072C229.403 31.232 229.531 31.44 229.627 31.696C229.723 31.92 229.771 32.16 229.771 32.416C228.203 32.992 226.299 33.312 224.059 33.376C223.259 34.912 222.539 36.448 221.899 37.984C221.291 39.488 220.763 40.944 220.315 42.352C219.899 43.76 219.563 45.088 219.307 46.336C219.083 47.584 218.971 48.704 218.971 49.696C218.971 51.104 219.499 51.888 220.555 52.048C221.515 51.92 222.427 51.68 223.291 51.328C224.155 50.976 224.923 50.528 225.595 49.984C225.787 50.272 225.899 50.512 225.931 50.704C225.739 50.992 225.403 51.328 224.923 51.712C224.475 52.096 223.979 52.464 223.435 52.816C222.891 53.2 222.363 53.52 221.851 53.776C221.339 54.032 220.955 54.176 220.699 54.208C219.899 54.176 219.099 54 218.299 53.68C217.499 53.36 216.763 52.96 216.091 52.48C215.451 52 214.923 51.472 214.507 50.896C214.091 50.288 213.883 49.696 213.883 49.12C213.883 48.352 213.979 47.392 214.171 46.24C214.395 45.056 214.699 43.776 215.083 42.4C215.467 41.024 215.915 39.584 216.427 38.08C216.939 36.576 217.499 35.088 218.107 33.616H215.371ZM229.366 51.184C229.366 50.064 229.478 48.752 229.702 47.248C229.926 45.712 230.246 44.08 230.662 42.352C231.11 40.624 231.622 38.816 232.198 36.928C232.806 35.04 233.478 33.152 234.214 31.264C234.854 29.568 235.59 27.856 236.422 26.128C237.286 24.4 238.214 22.704 239.206 21.04C240.198 19.376 241.222 17.792 242.278 16.288C243.366 14.784 244.454 13.408 245.542 12.16C246.054 12.16 246.598 12.224 247.174 12.352C247.782 12.48 248.358 12.656 248.902 12.88C249.478 13.072 249.99 13.312 250.438 13.6C250.918 13.888 251.302 14.176 251.59 14.464C249.19 16.928 247.03 19.424 245.11 21.952C243.19 24.448 241.67 26.8 240.55 29.008C239.942 30.224 239.382 31.36 238.87 32.416C238.39 33.472 237.942 34.528 237.526 35.584C237.11 36.608 236.726 37.648 236.374 38.704C236.054 39.728 235.75 40.816 235.462 41.968C241.606 34.128 246.166 30.208 249.142 30.208C249.974 30.208 250.87 30.48 251.83 31.024C252.79 31.568 253.638 32.304 254.374 33.232C253.382 34.32 252.358 35.632 251.302 37.168C250.246 38.704 249.27 40.256 248.374 41.824C247.51 43.36 246.79 44.8 246.214 46.144C245.67 47.456 245.398 48.432 245.398 49.072C245.398 49.392 245.446 49.616 245.542 49.744C245.638 49.84 245.846 49.888 246.166 49.888C246.646 49.888 247.03 49.824 247.318 49.696C247.606 49.568 247.782 49.504 247.846 49.504C248.006 49.76 248.102 49.936 248.134 50.032C248.166 50.128 248.182 50.208 248.182 50.272C248.182 50.4 247.99 50.592 247.606 50.848C247.222 51.072 246.758 51.312 246.214 51.568C245.702 51.792 245.19 52 244.678 52.192C244.166 52.384 243.782 52.48 243.526 52.48C243.206 52.48 242.886 52.384 242.566 52.192C242.246 52.032 241.958 51.808 241.702 51.52C241.478 51.232 241.286 50.912 241.126 50.56C240.998 50.208 240.934 49.84 240.934 49.456C240.934 48.976 241.062 48.272 241.318 47.344C241.606 46.384 241.99 45.28 242.47 44.032C242.95 42.752 243.526 41.36 244.198 39.856C244.87 38.352 245.59 36.816 246.358 35.248C246.358 35.12 246.294 35.056 246.166 35.056C246.07 35.056 245.814 35.184 245.398 35.44C245.014 35.696 244.646 35.952 244.294 36.208C243.142 37.072 241.974 38.144 240.79 39.424C239.638 40.672 238.502 42.048 237.382 43.552C236.294 45.056 235.254 46.656 234.262 48.352C233.302 50.016 232.47 51.696 231.766 53.392C231.67 53.616 231.526 53.824 231.334 54.016C231.142 54.208 230.982 54.304 230.854 54.304C230.758 54.304 230.614 54.192 230.422 53.968C230.262 53.744 230.102 53.456 229.942 53.104C229.814 52.784 229.686 52.448 229.558 52.096C229.43 51.744 229.366 51.44 229.366 51.184Z" fill="#C5E384"></path>
                        </g>
                        <defs>
                            <filter id="filter0_d" x="19.2613" y="12.16" width="239.113" height="65.168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                <feOffset dy="4"></feOffset>
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </a>
                <Basket quantity={quantity}/>
            </div>
        </header>
    )
};

export default Header;
