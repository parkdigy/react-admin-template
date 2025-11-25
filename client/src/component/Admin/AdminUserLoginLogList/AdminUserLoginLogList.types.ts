export interface AdminUserLoginLogListProps {
  noHash?: boolean;
  email?: string;
  limit?: number;
  onChange?: () => void;
  onRequestScrollToTop?: () => void;
}
