export interface CreatePanelDTO {
  title: string;
  address: string;
  owner: string;
}

export interface UpdatePanelDTO {
  title?: string;
  address?: string;
  owner?: string;
}

export interface PanelResponseDTO {
  id: string;
  title: string;
  address: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}