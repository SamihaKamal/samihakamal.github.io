"use client"
import * as React from "react"
import { SVGProps } from "react"
import styles from '../css/profilestyle.module.css'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
    const pathRef = React.useRef(null);
    const [inView, setInView] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    } else {
                        setInView(false);
                    }
                });
            },
           { threshold: 0.5} 
        );

        if (pathRef.current) {
            observer.observe(pathRef.current)
        }

        return () => {
            if (pathRef.current) {
                observer.unobserve(pathRef.current)
            }
        };
    }, []);
    return (
        <svg
            ref={pathRef}
            width={500}
            height={500}
            viewBox="0 0 404 458"
            className={`${styles.drawingpath} ${inView ? styles.inview : ""}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            
            d="M127.098 168.54C129.94 166.441 133.694 164.181 137.077 162.951C138.306 162.504 141.08 161.36 142.009 160.585C143.112 159.666 147.117 160.328 148.539 160.328C151.668 160.328 153.643 161.199 156.237 162.894C158.639 164.465 161.014 166.453 163.251 168.283C164.334 169.169 166.73 172.151 167.1 173.444C167.96 176.454 165.042 175.725 163.022 175.725C160.88 175.725 159.028 176.238 156.864 176.238C152.245 176.238 147.976 177.264 143.292 177.264C141.213 177.264 138.947 175.841 136.849 175.725C135.182 175.632 133.287 174.856 131.717 174.071C125.82 171.122 130.206 164.969 135.053 163.892C135.903 163.703 139.686 161.412 140.327 161.982C140.687 162.301 139.928 165.846 139.928 166.487C139.928 167.621 140.384 168.53 140.441 169.566C140.768 175.452 149.831 175.469 153.528 173.415C155.733 172.19 156.864 170.06 156.864 167.513C156.864 164.15 153.797 164.033 151.732 162.381C150.615 161.487 146.13 161.388 144.804 162.124C142.472 163.42 141.468 163.713 141.468 166.743C141.468 170.171 144.429 171.505 147.512 171.619C150.018 171.712 152.662 168.174 150.705 165.974C149.233 164.317 146.76 163.326 146.115 166.23C145.994 166.774 145.998 168.87 145.06 167.228C144.512 166.269 143.521 166.015 143.521 164.691C143.521 160.847 153.079 163.728 154.811 163.921C156.656 164.126 158.481 165.519 160.171 166.002C160.444 166.08 164.02 170.564 164.534 168.768C165.251 166.258 162.929 164.055 161.198 162.638C159.61 161.339 157.895 159.802 156.123 158.789C154.317 157.757 151.967 156.819 149.793 156.736C147.501 156.648 145.456 155.196 143.121 155.196C138.142 155.196 134.442 155.069 130.434 158.275C129.222 159.245 128.299 160.584 127.497 161.868C126.774 163.024 126.139 162.475 126.699 161.355C127.406 159.939 128.464 158.173 129.778 157.249C132.944 155.021 136.829 154.025 140.669 154.94C143.479 155.608 146.544 157.249 149.451 157.249C152.683 157.249 155.05 157.804 157.776 159.587C160.055 161.077 162.77 161.56 165.075 162.78C166.4 163.482 168.193 165.509 169.181 166.743C169.746 167.45 170.708 168.022 171.205 168.768C172.244 170.326 171.234 165.023 171.234 163.151C171.234 159.815 171.234 156.479 171.234 153.143C171.234 149.597 168.162 150.064 165.474 150.064C158.267 150.064 152.136 146.269 145.573 143.506C143.149 142.486 140.294 142.28 138.132 140.598C136.516 139.341 132.953 137.747 130.975 137.747C128.697 137.747 125.815 139.053 124.019 140.427C122.833 141.334 121.828 142.188 120.426 142.765C119.793 143.026 122.681 139.81 124.019 139.401C126.804 138.549 129.776 136.899 132.486 135.694C134.913 134.616 138.264 135.181 140.926 135.181C144.949 135.181 147.286 137.397 150.819 138.659C153.65 139.67 156.709 141.028 159.43 142.252C161.541 143.202 164.836 144.063 167.128 144.39C170.066 144.81 170.07 145.982 170.692 148.781C170.885 149.647 170.721 150.717 170.721 151.604C170.721 152.931 171.702 152.897 171.747 153.657C171.908 156.39 172.285 158.549 173.8 160.956C177.009 166.053 177.906 171.445 177.906 177.264C177.906 181.078 178.419 184.716 178.419 188.555C178.419 191.337 176.661 193.996 175.596 196.481C174.919 198.061 174.748 199.946 173.999 201.442C172.081 205.28 170.799 209.357 168.782 213.189C167.881 214.9 167.96 213.972 168.269 212.277C168.712 209.835 168.668 207.468 168.668 204.978C168.668 195.982 169.694 187.275 169.694 178.291C169.694 172.753 170.207 167.355 170.207 161.868C170.207 159.837 174.338 165.805 175.083 166.715C176.767 168.774 178.145 171.372 178.932 173.928C179.994 177.38 180.472 180.261 180.472 183.936C180.472 187.977 178.047 191.307 177.906 195.112C177.697 200.748 172.712 206.578 168.924 210.366C163.607 215.684 159.709 233.811 171.234 233.204C171.613 233.184 173.053 232.213 173.287 231.921C173.74 231.355 175.43 231.664 176.109 231.664C178.742 231.664 181.265 234.081 183.323 235.257C184.529 235.946 185.883 241.024 184.064 240.275C181.507 239.222 181.386 237.315 180.358 235.257C179.616 233.773 174.342 232.757 174.883 233.974C175.449 235.246 180.061 235.77 181.241 235.77C183.763 235.77 184.439 236.5 184.577 238.849C184.683 240.642 189.523 240.453 190.736 240.389C195.211 240.153 196.06 231.543 199.745 229.868C201.025 229.287 205.082 229.069 206.018 230.239C207.364 231.921 201.37 234.188 200.487 234.63C199.07 235.338 195.241 238.578 195.896 234.972C196.37 232.366 199.587 231.664 201.77 231.664C202.707 231.664 203.294 232.703 204.336 231.893C205.701 230.831 205.619 232.937 205.619 234.031C205.619 237.698 201.072 237.917 197.949 238.308C196.698 238.464 192.376 237.56 192.275 239.363C192.144 241.724 192.704 243.868 192.789 246.148C192.844 247.648 193.699 251.41 195.07 252.193C195.638 252.518 196.039 253.525 196.666 253.704C197.672 253.991 198.751 253.453 199.717 253.989C201.151 254.786 203.991 254.246 205.619 254.246C208.536 254.246 210.853 256.2 213.716 256.298C216.928 256.409 220.035 256.486 223.097 255.529C224.387 255.126 228.145 253.249 229.426 253.761C229.944 253.968 220.714 261.296 219.989 261.83C217.537 263.632 214.507 265.825 211.777 267.19C206.7 269.729 201.53 274.261 195.583 274.261C192.706 274.261 189.823 274.774 187.029 274.774C184.208 274.774 181.768 273.905 178.932 273.748C176.629 273.62 173.728 271.312 171.747 270.269C168.77 268.702 166.422 266.835 163.65 265.023C159.972 262.619 157.325 256.772 153.015 255.814C147.75 254.644 153.746 256.448 155.609 257.325C158.16 258.525 159.686 259.378 162.623 259.378C165.291 259.378 167.929 259.967 170.493 260.433C172.718 260.837 174.969 260.921 177.136 261.402C179.542 261.937 182.249 261.362 184.577 262.343C186.366 263.096 189.667 262.97 191.648 262.97C192.789 262.97 193.929 262.97 195.07 262.97C196.332 262.97 197.376 261.944 198.691 261.944C200.457 261.944 203.874 261.232 205.305 260.119C206.877 258.897 208.171 257.091 206.132 256.184C204.282 255.362 201.518 255.272 199.46 255.272C197.658 255.272 194.894 255.158 193.33 256.07C191.755 256.989 189.43 259.736 187.4 258.608C183.544 256.466 179.566 255.272 175.083 255.272C172.297 255.272 170.403 257.634 167.755 257.838C165.229 258.032 163.157 259.378 160.456 259.378C160.417 259.378 163.522 258.865 164.534 258.865C166.381 258.865 168.144 257.838 169.979 257.838C173.181 257.838 174.804 256.344 177.136 254.531C181.082 251.462 182.117 247.313 183.665 242.841C184.245 241.165 185.485 238.849 187.4 238.849C189.761 238.849 191.618 239.104 193.558 237.595C194.589 236.794 199.116 235.922 200.487 235.77C202.707 235.523 204.752 232.379 206.645 231.265C210.237 229.152 212.511 225.308 211.749 221.115C210.727 215.495 202.347 213.823 202.026 208.057C201.729 202.711 201.513 197.138 201.513 191.634C201.513 185.521 202.54 179.738 202.54 173.672C202.54 169.119 200.726 163.451 203.167 159.302C204.648 156.785 208.045 156.362 209.981 154.426C211.192 153.215 212.828 153.324 214.087 152.345C215.403 151.322 216.72 150.423 217.936 149.294C220.486 146.926 223.542 145.066 226.66 143.506C230.393 141.64 219.432 147.695 215.997 150.064C214.347 151.202 212.105 154.17 209.981 154.17C206.163 154.17 206.796 152.761 206.161 149.266C204.972 142.726 212.301 142.129 217.024 140.712C223.047 138.905 229.006 135.758 235.157 134.639C242.441 133.315 249.816 133.578 256.17 138.26C257.47 139.218 259.151 140.65 260.646 141.225C261.537 141.568 261.663 141.729 262.3 142.366C262.747 142.813 264.344 142.945 263.897 143.392C262.837 144.452 257.759 142.434 256.427 142.366C253.621 142.222 250.949 141.34 248.101 141.34C241.825 141.34 235.611 137.663 229.74 140.598C227.579 141.679 225.451 143.727 222.954 143.906C219.638 144.142 216.629 146.811 213.317 146.985C211.448 147.083 200.072 151.463 203.338 144.932C203.657 144.294 205.287 143.198 206.018 144.02C206.283 144.318 203.516 146.581 203.053 146.871C200.324 148.576 201.368 152.833 200.373 155.196C200.072 155.91 198.145 161.529 199.232 161.839C200.128 162.095 201.201 161.143 202.283 161.383C203.221 161.592 203.479 163.449 203.823 164.206C204.744 166.234 205.377 168.75 206.759 170.478C208.823 173.058 206.822 175.88 209.211 170.821C210.456 168.184 210.97 166.329 213.203 164.32C215.432 162.314 217.724 161.099 220.502 159.929C222.738 158.988 225.512 159.302 227.915 159.302C230.63 159.302 232.846 158.789 235.613 158.789C241.268 158.789 244.878 160.812 249.755 163.522C256.463 167.248 244.901 167.037 243.083 169.309C240.269 172.827 231.581 172.645 227.687 172.645C222.657 172.645 215.556 171.402 211.008 173.928C206.986 176.163 209.734 171.15 210.751 169.68C212.435 167.248 214.922 165.436 216.51 162.894C217.76 160.895 222.251 160.328 224.351 160.328C226.708 160.328 231.484 159.815 225.919 159.815C216.617 159.815 222.573 171.619 229.227 171.619C232.77 171.619 236.371 168.91 237.324 165.574C238.727 160.662 234.924 158.789 230.766 158.789C227.777 158.789 226.02 158.916 223.838 161.098C221.749 163.187 218.833 161.94 216.168 163.636C215.438 164.1 211.69 167.405 211.15 167.285C209.348 166.885 215.664 158.933 217.024 158.389C219.506 157.397 222.513 157.272 224.864 155.966C226.506 155.054 229.774 153.143 231.564 153.143C233.981 153.143 237.246 152.597 239.491 153.542C241.399 154.346 244.504 154.947 246.048 156.337C246.523 156.764 251.238 159.975 251.238 160.015C251.238 160.963 249.795 158.769 248.985 158.275C247.912 157.622 246.885 157.01 245.649 156.736C243.193 156.19 241.051 154.947 238.464 154.711C234.679 154.367 231.196 153.492 227.687 155.196C224.648 156.672 220.468 157.536 217.936 159.815C215.414 162.085 213.019 163.882 211.378 167C210.585 168.508 207.585 172.854 205.619 171.106C204.112 169.767 202.596 167.454 202.026 165.46C201.675 164.232 200.696 163.133 200.515 161.868C200.238 159.928 201.161 158.803 201.485 157.021C201.763 155.493 202.457 154.191 202.939 152.744C203.391 151.388 202.779 150.203 203.566 148.924C204.91 146.74 205.293 145.386 207.558 143.906C209.903 142.372 212.614 140.932 215.113 139.543C218.574 137.62 221.784 137.063 225.634 136.207C229.411 135.368 233.274 136.281 237.039 135.58C240.072 135.016 243.37 134.802 246.277 135.808C249.129 136.796 252.025 136.601 254.887 138.032C256.992 139.085 260.837 140.742 262.3 142.623C263.758 144.497 265.332 146.676 266.691 148.638C268.313 150.982 271.006 152.794 273.02 154.854C274.438 156.303 275.351 158.193 276.556 159.815C278.17 161.988 279.028 167.248 281.289 168.54C281.785 168.823 283.114 172.692 283.114 173.387C283.114 174.361 283.296 175.543 283.085 176.494C282.796 177.796 281.41 178.976 281.061 180.372C279.92 184.937 279.546 189.364 278.751 193.972C277.338 202.171 279.034 210.735 277.354 218.948C276.587 222.701 277.122 226.407 276.185 230.153C275.64 232.334 276.145 234.589 275.9 236.797C275.66 238.957 274.771 240.856 274.389 242.955C272.797 251.711 268.425 259.988 263.612 267.475C258.735 275.061 254.431 284.573 246.704 289.885C245.204 290.916 244.009 292.663 242.57 293.877C240.666 295.482 238.564 297.093 236.811 298.781C233.422 302.044 229.28 304.389 226.775 308.532C223.272 314.325 218.167 313.572 213.032 316.373C211.387 317.27 210.221 317.812 208.299 317.884C206.038 317.967 203.992 319.768 201.627 319.937C198.308 320.174 194.796 320.96 191.363 320.336C187.598 319.651 185.34 317.807 182.011 316.23C178.692 314.658 175.339 313.755 171.861 312.638C168.871 311.677 164.843 310.899 162.766 308.361C160.37 305.432 156.614 302.501 153.471 300.406C146.141 295.52 138.705 289.072 133.37 281.959C131.961 280.08 130.643 278.044 129.379 276.057C127.522 273.139 124.584 270.796 123.249 267.532C121.308 262.788 118.896 258.574 116.064 254.217C114.699 252.118 112.541 249.841 112.101 247.346C111.697 245.06 110.888 243.104 110.276 240.902C108.939 236.09 108.874 231.161 107.083 226.418C103.26 216.3 105.867 205.344 108.85 195.54C109.956 191.908 109.135 186.965 109.135 183.138C109.135 178.278 111.398 173.871 111.701 169.167C111.987 164.734 113.297 160.651 113.783 156.28C114.019 154.155 115.595 151.971 116.52 150.121C117.477 148.207 117.918 146.028 118.573 143.991C119.811 140.138 120.244 136.324 121.738 132.387C124.044 126.306 128.067 121.108 133 116.934C143.228 108.279 156.014 101.935 168.668 97.7167C178.975 94.281 189.869 94.1242 200.715 94.1242C210.927 94.1242 219.527 102.645 227.174 108.38C235.793 114.844 245.687 119.395 251.009 129.279C252.009 131.136 252.255 134.871 254.887 135.181C256.144 135.329 258.209 137.248 259.107 138.146C260.494 139.533 262.586 140.343 263.612 142.138C264.879 144.356 266.555 146.318 267.974 148.524C270.637 152.666 274.192 154.929 277.981 157.876C282.536 161.419 284.201 166.891 287.847 170.992C290.051 173.471 290.299 176.889 290.299 180.087C290.299 180.231 293.185 175.657 293.891 174.442C295.408 171.83 296.457 170.233 296.457 167.257C296.457 161.319 289.788 158.887 287.219 153.885C284.229 148.061 278.423 144.345 275.472 138.602C273.753 135.256 271.615 132.55 269.485 129.507C268.084 127.506 265.449 124.65 265.18 122.094C264.755 118.056 268.882 121.976 270.027 123.121C272.032 125.126 272.568 128.025 273.876 130.448C276.004 134.391 277.985 138.037 280.548 141.739C283.239 145.626 286.352 149.515 289.386 153.143C291.361 155.505 293.524 157.542 294.917 160.328C295.64 161.774 297.202 168.857 299.821 167.428C305.284 164.448 305.167 155.989 303.129 151.347C301.257 147.083 299.515 142.883 297.997 138.488C296.791 135 294.804 130.224 292.351 127.483C289.575 124.38 287.687 120.242 285.28 116.819C282.438 112.776 279.642 108.748 278.096 103.989C277.094 100.908 276.53 97.1241 277.012 93.8676C277.19 92.6678 278.775 89.3481 280.262 89.0776C282.107 88.7423 283.518 97.9559 283.883 99.2563C285.134 103.704 287.552 108.111 290.299 111.801C295.266 118.477 299.925 126.081 300.049 134.668C300.114 139.123 299.39 144.876 301.703 148.924C302.628 150.543 303.651 151.986 304.668 153.542C305.987 155.559 303.459 148.955 303.243 147.897C301.665 140.168 301.251 132.381 300.164 124.632C299.202 117.782 299.54 109.004 300.848 102.279C301.816 97.2978 302.576 89.9622 301.076 85.086C300.377 82.8144 299.841 78.5962 298.396 76.7891C297.34 75.469 297.756 75.9872 298.624 77.1883C300.397 79.6426 300.717 83.0387 301.589 85.9128C303.117 90.9466 303.129 97.6363 303.129 102.877C303.129 104.835 303.129 106.793 303.129 108.751C303.129 109.629 304.867 110.609 305.467 111.317C308.871 115.341 311.001 120.699 313.279 125.43C314.782 128.551 315.29 132.304 315.845 135.694C316.236 138.087 317.235 140.508 317.499 142.879C317.566 143.483 319.409 144.225 319.808 145.246C320.888 148.006 322.225 150.946 322.631 153.885C323.146 157.619 323.272 161.427 323.914 165.147C324.593 169.085 325.71 172.641 325.71 176.694C325.71 184.697 325.694 193.839 329.302 201.157C333.111 208.879 335.723 215.53 334.834 224.308C334.03 232.244 333.408 239.748 333.408 247.745C333.408 256.053 333.583 264.013 332.154 272.18C330.699 280.49 331.868 289.959 331.868 298.382C331.868 308.25 330.305 318.278 327.991 327.863C325.941 336.353 324.684 344.933 324.684 353.694C324.684 356.577 325.413 358.71 326.451 361.335C328.421 366.317 326.931 361.442 326.223 359.112C323.212 349.193 322.631 339.724 322.631 329.459C322.631 325.594 322.278 321.626 323.401 317.884C324.584 313.939 325.965 309.647 326.195 305.51C326.373 302.296 326.223 299.034 326.223 295.816C326.223 290.525 325.07 286.08 324.17 280.933C323.3 275.952 321.894 270.814 320.578 265.935C319.367 261.448 318.929 256.563 317.499 252.193C315.342 245.604 314.006 239.11 313.136 232.149C312.358 225.92 310.827 219.728 310.827 213.445C310.827 207.469 309.218 200.724 311.967 195.227C314.503 190.155 316.161 186.078 310.428 182.51C307.293 180.56 299.783 178.145 301.333 173.187C302.062 170.854 302.536 171.318 303.414 173.472C304.854 177.007 306.686 180.489 308.289 183.964C310.261 188.237 315.959 189.007 315.959 194.314C315.959 200.843 315.336 207.307 315.446 213.873C315.516 218.07 318.031 224.575 321.49 227.046C326.066 230.314 325.71 236.213 325.71 241.187C325.71 253.502 325.043 266.093 323.686 278.31C323.533 279.68 324.029 280.743 324.57 281.959C325.353 283.721 321.193 279.181 320.806 278.595C316.365 271.874 314.511 262.051 313.279 254.246C312.593 249.9 312.88 245.44 312.88 241.045C312.88 235.392 311.649 230.344 310.827 224.793C310.064 219.642 308.261 215.219 308.261 209.853C308.261 205.119 309.63 201.517 310.57 197.023C311.021 194.868 313.046 188.239 309.287 188.042C306.091 187.873 304.419 187.264 303.243 191.235C302.602 193.398 303.11 195.739 302.359 197.992C301.453 200.711 301.076 203.089 301.076 205.975C301.076 211.628 297.39 217.656 295.887 223.025C294.354 228.498 291.505 234.52 288.873 239.534C287.754 241.665 287.244 243.856 285.68 245.749C285.132 246.413 284.199 248.817 284.368 247.973C284.732 246.154 286.725 243.659 287.561 241.986C290.065 236.979 292.65 232.075 293.264 226.418C294.044 219.223 292.46 212.067 296.143 205.519C296.941 204.102 298.32 201.944 298.481 200.33C298.682 198.326 299.074 195.011 296.685 197.878C292.853 202.477 287.871 208.526 287.248 214.757C286.449 222.748 283.408 229.812 280.861 237.452C280.382 238.891 279.103 241.021 279.008 242.442C279 242.553 279.582 240.355 279.749 239.933C281.003 236.762 282.41 233.701 283.513 230.467C285.35 225.082 287.531 219.827 289.671 214.557C290.981 211.335 291.424 208.119 293.378 205.092C294.075 204.01 295.384 200.927 296.657 200.672C297.647 200.474 295.315 202.183 294.661 202.953C293.513 204.303 292.293 205.549 291.04 206.802C288.496 209.346 285.91 211.741 283.883 214.729C282.306 217.053 282.119 219.805 281.346 222.455C280.628 224.915 281.143 227.652 280.548 230.182C279.912 232.881 278.884 235.456 278.096 238.108C277.031 241.688 276.289 244.149 276.442 247.973C276.482 248.985 277.763 248.43 277.44 249.883C277.181 251.05 276.04 251.506 275.9 252.763C275.358 257.638 272.766 262.653 271.31 267.333C270.793 268.995 269.987 271.105 270.312 272.892C270.46 273.709 273.374 269.928 273.591 269.613C276.447 265.477 278.803 261.048 281.289 256.698C282.927 253.831 285.462 251.832 287.333 249.171C289.225 246.481 290.684 243.398 292.237 240.503C293.621 237.924 294.673 234.196 294.917 231.265C294.981 230.505 297.647 235.996 297.997 237.025C298.987 239.941 299.53 242.799 300.306 245.749C301.064 248.628 299.122 250.866 297.94 253.362C293.949 261.787 291.821 270.896 287.504 279.136C283.632 286.529 280.458 293.848 275.929 300.948C270.333 309.72 264.999 318.802 259.107 327.407C252.513 337.035 248.025 348.263 240.916 357.515C233.184 367.579 221.895 373.648 213.374 382.89C206.998 389.807 199.941 396.151 192.247 401.537C185.539 406.232 179.026 410.504 170.721 411.259C168.251 411.484 163.431 412.634 161.198 411.573C157.675 409.9 154.544 407.707 151.618 405.129C148.637 402.504 145.289 400.145 142.608 397.203C140.802 395.221 139.48 392.911 137.59 390.988C133.82 387.151 129.945 383.311 127.326 378.556C124.757 373.892 123.187 368.693 120.626 364.016C117.912 359.06 114.375 355.174 110.989 350.758C109.598 348.943 109.045 346.564 108.622 344.342C108.415 343.256 107.3 340.831 108.366 343.316C111.233 350.008 112.767 357.258 116.32 363.673C121.216 372.513 125.789 382.027 132.173 389.961C137.452 396.522 143.485 403.534 150.192 408.693C155.772 412.986 162.064 413.565 168.867 412.029C177.176 410.153 183.768 402.736 188.968 396.348C195.075 388.845 202.507 382.314 208.299 374.508C224.106 353.203 244.478 335.76 260.333 314.491C264.779 308.526 269.448 302.784 274.303 297.156C278.432 292.371 281.092 286.556 285.166 281.731C291.463 274.274 296.667 266.322 299.052 256.783C299.602 254.583 300.563 252.953 300.563 250.653C300.563 248.403 299.296 249.039 298.396 250.539C295.543 255.294 294.496 259.781 293.264 265.137C292.207 269.729 290.227 274.166 288.759 278.652C287.665 281.993 285.528 284.811 284.454 288.117C283.423 291.29 283.379 295.094 283.142 298.41C282.929 301.398 283.754 304.78 285.195 307.391C287.342 311.283 287.219 314.2 287.219 318.625C287.219 327.831 284.14 336.94 284.14 346.224C284.14 359.302 281.395 371.157 278.096 383.746C276.531 389.714 275.865 396.042 273.334 401.736C270.952 407.096 268.623 412.176 266.691 417.731C263.466 427.003 263.097 436.8 261.559 446.414C261.063 449.515 258.327 455.273 262.072 456.849C267.435 459.108 274.244 454.001 279.464 453.485C283.639 453.072 287.7 452.561 291.867 452.088C296.444 451.568 301.29 452.345 305.923 452.345C311.782 452.345 317.587 451.831 323.401 451.831C330.37 451.831 337.108 453.262 344.071 453.371C352.414 453.501 360.811 454.397 369.219 454.397C371.187 454.397 372.836 454.372 374.693 454.797C376.691 455.253 381.602 454.532 383.304 453.485C384.633 452.667 387.253 452.11 388.835 451.432C390.738 450.616 393.562 450.805 395.621 450.805C396.957 450.805 399.579 451.308 400.838 450.748C402.716 449.913 402.691 443.026 402.691 441.453C402.691 437.019 401.665 432.729 401.665 428.309C401.665 423.978 401.194 419.526 400.325 415.279C398.187 404.825 395.507 394.713 395.507 383.974C395.507 375.525 397.159 366.427 395.906 358.028C395.498 355.294 394.307 352.05 391.401 351.727C388.219 351.374 384.583 350.75 381.507 349.959C372.009 347.517 360.894 345.981 352.254 341.206C348.168 338.948 344.422 336.941 340.593 334.192C337.307 331.833 334.391 329.142 331.241 326.608C328.837 324.674 324.477 319.685 321.205 319.423C316.949 319.083 313.624 317.257 309.316 319.68C307.011 320.976 305.484 323.555 303.613 325.354C300.651 328.202 298.005 330.708 294.661 333.023C293.592 333.763 290.276 337.397 289.272 337.158C288.134 336.887 287.289 328.579 287.105 327.007C286.651 323.119 285.556 319.468 285.052 315.603C284.528 311.586 282.274 308.017 281.688 303.913C281.487 302.506 281.192 300.103 281.602 298.667C282.1 296.925 288.11 299.781 288.759 300.206C296.443 305.249 303.709 310.435 311.825 314.804C314.535 316.264 314.783 317.263 311.312 316.8C306.598 316.172 301.609 312.157 297.854 309.501C293.416 306.362 289.012 303.53 283.912 301.489C282.91 301.089 281.992 300.734 281.061 300.32C277.664 298.811 281.295 304.428 281.973 305.966C283.929 310.399 287.125 315.064 288.132 319.822C289.098 324.389 288.246 329.934 288.246 334.591C288.246 345.183 287.277 355.639 286.735 366.211C286.268 375.31 281.95 383.643 278.295 391.9C276.026 397.026 274.204 402.229 272.108 407.41C270.26 411.979 268.548 416.894 266.064 421.153C263.474 425.593 262.612 430.925 260.76 435.694C259.811 438.138 260.088 440.555 260.019 443.107C259.935 446.205 258.574 450.164 255.343 451.062C253.03 451.704 250.759 452.183 248.386 452.373C243.88 452.734 239.853 455.925 235.385 456.422C232.098 456.787 228.712 456.305 225.406 456.564C222.101 456.824 217.528 457.838 214.343 456.564C212.274 455.737 212.665 455.563 214.743 453.485C219.458 448.77 224.896 445.421 228.941 439.971C236.164 430.238 241.407 419.304 245.621 407.98C246.101 406.691 246.676 402.613 246.676 403.989C246.676 406.065 246.765 408.163 246.59 410.233C245.692 420.863 240.345 432.358 235.128 441.51C232.396 446.304 229.481 452.454 223.866 454.397C222.192 454.977 220.124 455.937 218.335 455.937C217.138 455.937 215.802 455.783 214.629 456.051C209.584 457.204 206.031 457.83 200.886 456.336C192.492 453.899 183.361 456.508 174.826 455.31C169.132 454.511 163.321 453.22 157.662 452.088C151.958 450.947 145.13 451.71 139.415 452.345C131.55 453.219 123.744 454.651 115.864 455.538C108.503 456.366 101.942 455.369 94.6515 454.512C81.3553 452.947 67.6495 455.248 54.3646 453.628C40.566 451.945 27.9888 460.83 14.5908 455.025C11.5622 453.712 8.50403 452.858 5.21046 452.858C3.0368 452.858 2.30559 453.118 1.8746 450.748C1.19969 447.036 1.04624 442.916 2.15971 439.258C7.51433 421.664 10.0625 402.969 23.4294 389.22C29.287 383.195 35.1987 377.043 41.2207 371.229C46.5956 366.039 53.6384 364.008 60.3805 361.25C63.3315 360.043 66.233 359.007 68.6489 356.859C69.1536 356.41 71.1576 354.306 71.8707 354.464C72.7918 354.669 71.0885 358.878 70.9298 359.368C67.9738 368.505 65.4046 377.894 62.2053 386.91C60.6669 391.246 59.8972 396.046 58.7268 400.51C57.3869 405.622 54.8779 410.195 54.108 415.508C52.9046 423.811 51.8763 432.081 50.5155 440.37C50.3192 441.565 46.51 456.706 48.9188 456.935C54.1993 457.438 59.5796 455.605 64.0015 452.744C67.707 450.346 68.9879 446.012 71.443 442.594C75.233 437.317 77.5016 433.551 83.3609 430.163C87.2393 427.92 89.8538 426.108 94.3664 425.544C99.1118 424.951 103.902 425.145 108.679 425.145C112.982 425.145 117.169 424.945 121.452 424.66C121.877 424.632 125.444 424.874 125.444 424.346C125.444 423.229 120.05 422.029 119.428 421.837C109.177 418.671 99.2156 414.364 92.4561 405.643C85.5794 396.769 81.7446 385.889 76.8032 375.876C71.8274 365.794 69.4889 357.211 69.6183 345.825C69.6719 341.108 71.9526 336.426 72.9256 331.826C74.158 326 75.7552 320.256 77.0028 314.434C77.8622 310.423 77.715 306.112 78.3429 302.031C79.1219 296.967 80.5599 291.988 80.9374 286.892C81.1837 283.567 82.2246 280.178 82.7337 276.884C83.4841 272.028 83.5947 267.178 84.3873 262.343C84.9521 258.898 85.7161 255.606 86.4402 252.193C87.0527 249.305 88.0553 246.647 89.0062 243.867C89.23 243.213 89.2339 242.043 89.7475 241.529C90.9438 240.333 94.4846 253.792 94.6515 254.702C95.8606 261.289 98.4374 267.243 100.411 273.634C101.753 277.981 103.972 282.525 106.056 286.578C106.897 288.213 107.086 286.909 106.855 285.723C106.358 283.173 105.959 280.664 105.657 278.081C105.208 274.242 105.503 269.037 103.946 265.479C102.088 261.232 99.1106 257.768 96.3622 254.075C92.7447 249.214 91.5109 243.576 88.3219 238.564C84.8231 233.066 83.9882 228.425 83.9882 222.027C83.9882 215.525 82.4485 209.113 82.4485 202.64C82.4485 199.217 82.9617 195.843 82.9617 192.404C82.9617 187.925 81.8727 183.275 81.137 178.861C80.4693 174.855 78.3385 171.06 77.3449 167.086C76.6941 164.482 76.5404 161.874 76.0049 159.273C74.5945 152.423 74.5072 143.654 75.6628 136.721C76.489 131.763 77.8387 127.145 79.2552 122.351C80.3738 118.565 80.6165 114.972 82.3345 111.345C84.3723 107.043 85.8236 102.369 87.8087 98.0018C89.6791 93.8871 91.8284 89.8267 93.4825 85.6277C97.4729 75.4984 103.445 67.2902 110.219 58.9123C116.565 51.063 125.408 45.3627 133.598 39.5529C139.736 35.1993 145.66 29.9741 151.618 25.3541C164.211 15.5883 180.396 10.471 196.324 10.471C204.575 10.471 212.03 11.0021 220.131 12.7805C225.795 14.0238 231.328 15.6904 236.925 16.9146C245.094 18.7016 250.995 21.1924 256.313 27.692C262.574 35.345 267.39 43.9619 273.762 51.5278C278.983 57.7286 286.342 65.1986 288.417 73.3107C289.52 77.624 289.569 81.9315 291.068 86.198C292.468 90.1817 294.149 94.043 295.687 97.9733C296.6 100.307 298.056 102.484 298.909 104.788C299.993 107.715 301.329 105.966 302.102 103.647C304.059 97.7781 305.952 89.3328 304.554 83.2327C303.974 80.6997 301.349 78.7477 300.249 76.4185C297.858 71.355 295.816 66.3261 293.064 61.4213C288.775 53.7762 283.204 47.0228 278.267 39.781C275.131 35.1827 271.903 30.3109 268.459 25.9813C265.266 21.9682 260.839 17.6284 256.085 15.4891C250.038 12.7682 243.853 10.5716 237.695 8.16156C231.671 5.80473 225.341 5.54019 219.247 3.79928C215.979 2.86547 212.762 2.86368 209.439 2.25965C204.896 1.43355 200.094 1.98834 195.64 1.11919C190.092 0.0367623 184.331 2.55516 178.932 3.68523C173.496 4.82295 167.995 5.2274 162.908 7.39175C159.43 8.87214 156.09 10.5995 152.644 12.1247C144.27 15.8311 136.672 19.6003 130.063 26.2094C122.703 33.5694 115.756 41.3151 108.394 48.6766C101.769 55.3018 96.5595 64.8609 92.4846 73.2252C90.6395 77.0125 87.8238 80.2945 85.927 84.0881C83.9126 88.1167 82.1724 92.4917 80.6808 96.7473C77.555 105.665 76.8032 115.925 76.8032 125.316C76.8032 129.992 76.8032 134.668 76.8032 139.344C76.8032 143.946 78.0048 148.441 78.5995 153.001C79.6059 160.717 80.2507 172.649 87.0674 178.005C88.9368 179.474 88.8726 171.848 89.0062 170.364C89.7913 161.649 91.1236 153.255 92.7127 144.647C94.5789 134.538 98.0355 124.926 101.551 115.28C104.534 107.096 108.97 98.8198 114.439 92.0143C117.462 88.2519 112.986 96.1159 112.5 97.0039C110.12 101.353 110.675 104.311 110.675 108.779C110.675 111.185 108.847 113.38 107.881 115.479C105.709 120.199 103.666 124.983 101.494 129.707C97.5699 138.242 94.3695 146.888 92.4276 156.08C90.0046 167.549 86.5542 178.601 86.5542 190.494C86.5542 198.115 88.0942 205.55 89.5194 212.961C89.7755 214.293 90.655 219.456 91.9714 219.832C93.9393 220.394 96.9339 213.426 97.6167 211.564C98.8828 208.111 99.3219 204.664 98.6146 200.986C98.4261 200.005 98.4588 195.165 96.5048 196.367C89.8311 200.474 91.6863 208.738 91.6863 215.27C91.6863 217.779 91.289 220.429 92.4846 222.712C94.0577 225.715 96.3745 228.372 98.0729 231.322C100.101 234.844 103.091 237.765 104.916 241.415C105.67 242.925 106.095 244.578 106.969 246.034C107.839 247.485 106.199 242.733 105.657 241.13C104.613 238.04 103.92 233.477 104.631 230.239C105.449 226.508 106.56 233.277 106.569 234.059C106.619 238.033 106.317 240.967 108.109 244.552C110.166 248.665 111.972 253.285 112.956 257.781C113.884 262.023 112.88 266.335 112.015 270.469C110.995 275.343 111.483 281.288 112.756 286.065C117.118 302.422 130.091 310.502 141.981 321.362C148.686 327.486 155.399 333.921 161.312 340.807C163.469 343.319 166.581 346.528 170.207 346.623C175.017 346.75 178.539 343.919 182.781 342.033C186.733 340.277 190.806 339.367 194.271 336.644C194.938 336.121 195.15 335.318 194.1 335.076C189.347 333.979 184.235 334.679 179.417 334.791C173.503 334.929 167.618 335.846 161.739 335.846C159.047 335.846 157.168 334.398 154.697 334.306C151.045 334.171 146.995 331.075 144.148 329.06C139.526 325.789 135.418 321.889 131.26 318.055C127.595 314.674 124.139 311.209 121.11 307.249C119.394 305.005 117.38 302.928 115.779 300.606C113.733 297.64 112.388 294.26 110.219 291.368C109.73 290.716 103.662 283.679 103.519 284.325C102.697 288.023 104.544 292.013 103.433 295.901C102.84 297.979 101.393 301.694 98.8142 299.864C96.9617 298.55 89.8592 291.573 86.8964 293.478C85.8154 294.173 86.8883 298.18 86.9534 299.123C87.3391 304.716 86.9162 310.344 87.1815 315.945C87.6843 326.56 91.3731 336.484 94.0243 346.68C97.3667 359.536 104.634 370.31 111.074 381.693C113.247 385.534 115.027 389.656 118.373 392.698C122.617 396.556 124.881 400.322 127.098 405.643"
            stroke="white"
            strokeLinecap="round"
            />
        </svg>
    )
  
}
export default SvgComponent