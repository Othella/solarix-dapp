export interface CreatePanelDTO {
  title: string;
  address: string;
}

export interface UpdatePanelDTO {
  title?: string;
  address?: string;
}

export interface PanelResponseDTO {
  id: string;
  title: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}