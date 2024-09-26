export interface CreatePanelDTO {
  title: string;
  address: string;
}

export interface UpdatePanelDTO {
  title?: string;
  address?: string;
}

export interface PanelResponseDTO {
  address: string;
}

export interface PanelDTO {
  id: string;
  title: string;
  address: string;
}
