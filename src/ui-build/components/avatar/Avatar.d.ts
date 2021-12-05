/// <reference types="react" />
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: number;
    identityChecked?: boolean;
    blur?: boolean;
    onEdit?: (img: File) => void;
}
/**
 * Display user's profile picture. Fallback to default avatar if no image or image is broken.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226920
 * @example
 * <Avatar src="image_url.png" size={64} />
 */
export declare const Avatar: ({ src, alt, size, identityChecked, blur, onEdit, ...rest }: AvatarProps) => JSX.Element;
