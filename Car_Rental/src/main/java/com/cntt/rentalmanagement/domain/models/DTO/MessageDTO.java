package com.cntt.rentalmanagement.domain.models.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDTO {

	private Long id;
	private String userName;
	private String imageUrl;
	private String message;
}
